'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		points: THREE.Points;
		animationId: number;
	} | null>(null);
	const [theme, setTheme] = useState<string>('dark');

	useEffect(() => {
		// Check theme
		const checkTheme = () => {
			const currentTheme = document.documentElement.getAttribute('data-theme');
			setTheme(currentTheme || 'dark');
		};

		checkTheme();

		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!containerRef.current) return;

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(
			theme === 'dark' ? 0x000000 : 0xffffff,
			2000,
			10000
		);

		const width = containerRef.current.clientWidth || window.innerWidth;
		const height = containerRef.current.clientHeight || window.innerHeight;
		
		const camera = new THREE.PerspectiveCamera(
			60,
			width / height,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);
		renderer.setClearColor(scene.fog.color, 0);

		// Make canvas fill container
		const canvas = renderer.domElement;
		canvas.style.display = 'block';
		canvas.style.width = '100%';
		canvas.style.height = '100%';

		containerRef.current.appendChild(canvas);

		// Create particles
		const positions: number[] = [];
		const colors: number[] = [];

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0; // Will be animated
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				if (theme === 'dark') {
					colors.push(200, 200, 200);
				} else {
					colors.push(0, 0, 0);
				}
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});

		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let count = 0;

		// Animation function
		const animate = (): void => {
			sceneRef.current!.animationId = requestAnimationFrame(animate);

			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array as Float32Array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					// Animate Y position with sine waves
					positions[index + 1] =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;

			renderer.render(scene, camera);
			count += 0.1;
		};

		// Handle window resize
		const handleResize = () => {
			if (!containerRef.current) return;
			const width = containerRef.current.clientWidth || window.innerWidth;
			const height = containerRef.current.clientHeight || window.innerHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};

		window.addEventListener('resize', handleResize);

		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			points,
			animationId: 0,
		};

		// Start animation
		animate();

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);

				// Clean up Three.js objects
				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();

				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, [theme]);

	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none', className)}
			style={{ 
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 0
			}}
			{...props}
		/>
	);
}
