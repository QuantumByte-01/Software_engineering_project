import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModelViewer = ({ modelUrl }) => {
    const containerRef = useRef(null); // Ref for the container

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        containerRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            1,
            1000
        );
        camera.position.set(0, 10, 20);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05; // Smoother damping
        controls.enablePan = true; // Enable panning
        controls.enableZoom = true;
        controls.zoomSpeed = 1.0;
        controls.rotateSpeed = 0.8; // Adjusted for smoother rotation
        controls.panSpeed = 0.8; // Adjusted pan speed
        controls.minDistance = 5;
        controls.maxDistance = 50;
        controls.minPolarAngle = 0; // Allow full vertical rotation
        controls.maxPolarAngle = Math.PI; // Allow full vertical rotation
        controls.autoRotate = false;
        controls.target.set(0, 0, 0);

        const spotLight = new THREE.SpotLight(0xffffff, 3000, 200, 0.5, 0.5);
        spotLight.position.set(10, 30, 10);
        spotLight.castShadow = true;
        spotLight.shadow.bias = -0.0001;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        scene.add(spotLight)

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const loader = new GLTFLoader();
        loader.load(
            modelUrl,
            (gltf) => {
                const mesh = gltf.scene;
                scene.add(mesh);
                const box = new THREE.Box3().setFromObject(mesh);
                const center = box.getCenter(new THREE.Vector3());
                mesh.position.sub(center);
                controls.target.copy(center);
                controls.update();
            },
            undefined,
            (error) => {
                console.error(error);
            }
        );

        const handleResize = () => {
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

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

    return <div ref={containerRef} className="model-model" />;
};

export default ThreeDModelViewer;
