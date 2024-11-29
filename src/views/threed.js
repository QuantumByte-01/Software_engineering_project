import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Maximize } from 'lucide-react';

const ThreeDModelViewer = ({ modelUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 10, 20);

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.enableZoom = true;

    // Lighting setup
    const spotLight = new THREE.SpotLight(0xffffff, 2, 200, 0.5, 0.5);
    spotLight.position.set(10, 30, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        controls.target.copy(center);
        controls.update();
      },
      undefined,
      (error) => console.error(error)
    );

    // Window resize handler
    const handleResize = () => {
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [modelUrl]);

  const openFullScreen = () => {
    const fullScreenWindow = window.open('', '_blank', 'width=800,height=600');
    if (fullScreenWindow) {
      // Write initial structure to the new window
      fullScreenWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>3D Model Viewer</title>
            <style>
              body { margin: 0; overflow: hidden; }
              #threeD-container { width: 100vw; height: 100vh; }
            </style>
          </head>
          <body>
            <div id="threeD-container"></div>
          </body>
        </html>
      `);
      fullScreenWindow.document.close();

      // Wait for the new window to load its DOM
      fullScreenWindow.onload = () => {
        const container = fullScreenWindow.document.getElementById('threeD-container');

        // Full-screen Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(fullScreenWindow.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Full-screen Scene and Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          1,
          1000
        );
        camera.position.set(0, 10, 20);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Lighting
        const spotLight = new THREE.SpotLight(0xffffff, 2, 200, 0.5, 0.5);
        spotLight.position.set(10, 30, 10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        // Load the Model
        const loader = new GLTFLoader();
        loader.load(
          modelUrl,
          (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            controls.target.copy(center);
            controls.update();
          },
          undefined,
          (error) => console.error(error)
        );

        // Handle Resizing
        const handleResize = () => {
          renderer.setSize(container.clientWidth, container.clientHeight);
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
        };
        fullScreenWindow.addEventListener('resize', handleResize);

        // Animation Loop
        const animate = () => {
          if (!fullScreenWindow.closed) {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
          }
        };
        animate();
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="model-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="control-panel" style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={openFullScreen} title="Full Screen" style={{ color: 'white' }}>
          <Maximize color="white" />
        </button>
      </div>
    </div>
  );
};

export default ThreeDModelViewer;