/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { AdditiveBlending } from "three";
import { GalaxyStore } from "./store";

const GalaxyRenderer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const parameters = {
            count: 10000,
            stars: 9600,
            starColor: "#1b3984",
            size: 0.001,
            radius: 10,
            branches: 8,
            spin: 5,
            randomness: 2,
            randomnessPower: 10,
            insideColor: "#a930ff",
            outsideColor: "#fff",
        };
        const geometry = new THREE.BufferGeometry();
        const textureLoader = new THREE.TextureLoader();
        const shape = textureLoader.load("/particleShape/1.png");
        let bgStarsGeometry: any = null;
        let bgStarsMaterial: any = null;
        let bgStars: any = null;

        const material = new THREE.PointsMaterial({
            color: "white",
            size: parameters.size,
            depthWrite: false,
            sizeAttenuation: true,
            blending: AdditiveBlending,
            vertexColors: true,
            transparent: true,
            alphaMap: shape,
        });
        const points = new THREE.Points(geometry, material);
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();

        //Background stars
        const generateBgStars = () => {
            if (bgStars !== null) {
                bgStarsGeometry.dispose();
                bgStarsMaterial.dispose();
                scene.remove(bgStars);
            }

            bgStarsGeometry = new THREE.BufferGeometry();
            const bgStarsPositions = new Float32Array(parameters.stars * 3);

            for (let j = 0; j < parameters.stars; j++) {
                bgStarsPositions[j * 3 + 0] = (Math.random() - 0.5) * 20;
                bgStarsPositions[j * 3 + 1] = (Math.random() - 0.5) * 20;
                bgStarsPositions[j * 3 + 2] = (Math.random() - 0.5) * 20;
            }

            bgStarsGeometry.setAttribute("position", new THREE.BufferAttribute(bgStarsPositions, 3));

            bgStarsMaterial = new THREE.PointsMaterial({
                size: parameters.size,
                depthWrite: false,
                sizeAttenuation: true,
                blending: AdditiveBlending,
                color: parameters.starColor,
                transparent: true,
                alphaMap: shape,
            }) as unknown as any;

            bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial) as unknown as any;

            scene.add(bgStars);
        };
        generateBgStars();

        function generateGalaxy() {
            if (points !== null) {
                geometry.dispose();
                material.dispose();
                scene.remove(points);
            }

            const positions = new Float32Array(parameters.count * 3);
            const colors = new Float32Array(parameters.count * 3);

            const colorInside = new THREE.Color(parameters.insideColor);
            const colorOutside = new THREE.Color(parameters.outsideColor);

            for (let i = 0; i < parameters.count; i++) {
                //Position
                const x = Math.random() * parameters.radius;
                const branchAngle = ((i % parameters.branches) / parameters.branches) * 2 * Math.PI;
                const spinAngle = x * parameters.spin;

                const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
                const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
                const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

                positions[i * 3] = Math.sin(branchAngle + spinAngle) * x + randomX;
                positions[i * 3 + 1] = randomY;
                positions[i * 3 + 2] = Math.cos(branchAngle + spinAngle) * x + randomZ;

                //Color

                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, x / parameters.radius);

                colors[i * 3 + 0] = mixedColor.r;
                colors[i * 3 + 1] = mixedColor.g;
                colors[i * 3 + 2] = mixedColor.b;
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
            scene.add(points);
        }

        generateGalaxy();

        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.x = 0;
        camera.position.y = 4.05;
        camera.position.z = 1.5;
        scene.add(camera);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas as HTMLCanvasElement | OffscreenCanvas | undefined,
            alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        const clock = new THREE.Clock();

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            const targetStarsRotationSpeed = 0.02;
            const starsRotationSpeed = GalaxyStore.getState().starsRotationSpeed;
            const newSpeed = THREE.MathUtils.lerp(starsRotationSpeed, targetStarsRotationSpeed, 0.1);

            points.rotation.y = elapsedTime * 0.05;
            bgStars.rotation.y = -elapsedTime * newSpeed;
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();

        return () => {};
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="webgl"
            style={{
                position: "absolute",
            }}
        ></canvas>
    );
};

export default GalaxyRenderer;
