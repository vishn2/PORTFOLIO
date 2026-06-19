"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.1;
      torusRef.current.rotation.z = t * 0.05;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }

    if (icosaRef.current) {
      icosaRef.current.rotation.x = -t * 0.1;
      icosaRef.current.rotation.y = t * 0.12;
      icosaRef.current.position.y = Math.cos(t * 0.4) * 0.2 + 0.5;
      icosaRef.current.position.x = Math.sin(t * 0.3) * 0.3 - 2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.3;
      ringRef.current.rotation.z = t * 0.08;
      ringRef.current.position.y = Math.sin(t * 0.6) * 0.15 - 0.5;
      ringRef.current.position.x = 2.5;
    }
  });

  const wireframeMaterial = useMemo(
    () => (
      <meshBasicMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.12}
      />
    ),
    []
  );

  const edgeMaterial = useMemo(
    () => new THREE.LineBasicMaterial({ color: "#c6f0ff", transparent: true, opacity: 0.2 }),
    []
  );

  return (
    <group>
      {/* Ambient light for subtle fill */}
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#c6f0ff" />

      {/* Main Torus Knot - center */}
      <mesh ref={torusRef} position={[0.5, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.4, 128, 16, 2, 3]} />
        {wireframeMaterial}
      </mesh>

      {/* Icosahedron - left */}
      <mesh ref={icosaRef} position={[-2, 0.5, -1]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial
          color="#c6f0ff"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Ring - right */}
      <mesh ref={ringRef} position={[2.5, -0.5, -0.5]}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshBasicMaterial
          color="#d4b8ff"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Floating dots/spheres */}
      {[...Array(8)].map((_, i) => (
        <FloatingDot key={i} index={i} />
      ))}
    </group>
  );
}

function FloatingDot({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const startPos = useMemo(() => ({
    x: (Math.random() - 0.5) * 8,
    y: (Math.random() - 0.5) * 4,
    z: (Math.random() - 0.5) * 3 - 1,
  }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = startPos.x + Math.sin(t * 0.3 + index) * 0.5;
      ref.current.position.y = startPos.y + Math.cos(t * 0.4 + index * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={[startPos.x, startPos.y, startPos.z]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
    </mesh>
  );
}
