import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Maximize } from 'lucide-react';

const ThreeDModelViewer = ({ modelUrl }) => {
  const containerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  let renderer, scene, camera, controls, spotLight, model;
  let initialCameraPosition, initialCameraTarget;

  useEffect(() => {
    if (!containerRef.current) return;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 10, 20);

    // OrbitControls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.enableZoom = true;

    // Lighting setup at increased intensity
    spotLight = new THREE.SpotLight(0xffffff, 2, 200, 0.5, 0.5);
    spotLight.position.set(10, 30, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        if (model) {
          scene.remove(model);
        }
        model = gltf.scene;
        scene.add(model);

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        initialCameraPosition = camera.position.clone();
        initialCameraTarget = controls.target.clone();
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
      controls.autoRotate = isAutoRotate;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [modelUrl, isFullScreen, isAutoRotate, isWireframe]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullScreen(true);
      camera.position.copy(initialCameraPosition.multiplyScalar(2));
      controls.target.copy(initialCameraTarget);
      controls.update();
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
      camera.position.copy(initialCameraPosition);
      controls.target.copy(initialCameraTarget);
      controls.update();
    }
  };

  const toggleWireframe = () => {
    if (model) {
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.wireframe = !isWireframe;
          child.material.opacity = isWireframe ? 0.5 : 1;
          child.material.needsUpdate = true;
        }
      });
    }
    setIsWireframe((prevWireframe) => !prevWireframe);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotate((prevAutoRotate) => !prevAutoRotate);
  };

  const setCameraPreset = (position) => {
    if (position === 'top') {
      camera.position.set(0, 20, 0);
    } else if (position === 'side') {
      camera.position.set(20, 0, 0);
    }
    controls.target.set(0, 0, 0);
    controls.update();
  };

  return (
    <div
      ref={containerRef}
      className="model-container"
      style={{
        width: isFullScreen ? '100vw' : '100%',
        height: isFullScreen ? '100vh' : '100%',
        position: isFullScreen ? 'fixed' : 'relative',
        top: isFullScreen ? 0 : 'auto',
        left: isFullScreen ? 0 : 'auto',
        zIndex: isFullScreen ? 999 : 'auto',
        overflow: 'hidden',
      }}
    >
      <div className="control-panel" style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={toggleFullScreen} title="Full Screen" style={{ color: 'white' }}>
          <Maximize color="white" />
        </button>
        <button
          onClick={toggleWireframe}
          title={isWireframe ? 'Normal' : 'Wireframe'}
          style={{ color: 'white' }}
        >
          {isWireframe ? 'Normal' : 'Wireframe'}
        </button>
        <button
          onClick={toggleAutoRotate}
          title={isAutoRotate ? 'Stop Rotation' : 'Auto-Rotate'}
          style={{ color: 'white' }}
        >
          {isAutoRotate ? 'Stop Rotation' : 'Auto-Rotate'}
        </button>
        <button
          onClick={() => setCameraPreset('top')}
          title="Top View"
          style={{ color: 'white' }}
        >
          Top
        </button>
        <button
          onClick={() => setCameraPreset('side')}
          title="Side View"
          style={{ color: 'white' }}
        >
          Side
        </button>
      </div>
    </div>
  );
};

export default ThreeDModelViewer;

