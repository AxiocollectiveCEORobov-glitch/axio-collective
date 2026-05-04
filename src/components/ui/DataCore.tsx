"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

// ── Nodos conectados (grafo 3D) ──────────────────────────────────────────────
function DataGraph() {
  const groupRef = useRef<any>(null);
  const linesRef = useRef<any>(null);
  const { scrollY } = useScroll();
  const rotationY = useTransform(scrollY, [0, 1500], [0, Math.PI * 1.5]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);

  // Generar posiciones de nodos aleatoria-pero-fija (useMemo para no recalcular)
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    // Nodo central
    pts.push(new THREE.Vector3(0, 0, 0));
    // Nodos primarios (capa 1)
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const r = 1.4;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * r,
        (Math.random() - 0.5) * 1.2,
        Math.sin(angle) * r
      ));
    }
    // Nodos secundarios (capa 2)
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const r = 2.6 + Math.random() * 0.4;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * r,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * r
      ));
    }
    return pts;
  }, []);

  // Generar líneas (conexiones)
  const linePositions = useMemo(() => {
    const positions: number[] = [];
    // Centro → capa 1
    for (let i = 1; i <= 6; i++) {
      positions.push(nodes[0].x, nodes[0].y, nodes[0].z);
      positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
    }
    // Capa 1 → capa 2
    for (let i = 1; i <= 6; i++) {
      for (let j = 7; j <= 16; j++) {
        if (Math.random() > 0.65) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(positions);
  }, [nodes]);

  // Pulso de líneas
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <motion.group ref={groupRef} scale={scale}>
      {/* Líneas de conexión */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#FF5722"
          transparent
          opacity={0.25}
          linewidth={1}
        />
      </lineSegments>

      {/* Nodo central — icosaedro brillante */}
      <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[0.45, 1]} />
          <meshStandardMaterial
            color="#FF5722"
            emissive="#FF5722"
            emissiveIntensity={1.2}
            metalness={0.7}
            roughness={0.15}
          />
        </mesh>
        {/* Wireframe exterior */}
        <mesh>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshBasicMaterial color="#FF5722" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>

      {/* Nodos capa 1 */}
      {nodes.slice(1, 7).map((pos, i) => (
        <Float key={`n1-${i}`} speed={1 + i * 0.2} floatIntensity={0.3} rotationIntensity={0.1}>
          <mesh position={pos}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color="#A8A8C0"
              emissive="#FF5722"
              emissiveIntensity={0.3}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}

      {/* Nodos capa 2 — más pequeños */}
      {nodes.slice(7).map((pos, i) => (
        <mesh key={`n2-${i}`} position={pos}>
          <sphereGeometry args={[0.08, 6, 6]} />
          <meshStandardMaterial
            color="#3A3A50"
            emissive="#0064FF"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}

      {/* Anillo exterior decorativo */}
      <mesh rotation-x={Math.PI / 2.4}>
        <torusGeometry args={[2.9, 0.012, 8, 120]} />
        <meshBasicMaterial color="#1E1E2A" transparent opacity={0.6} />
      </mesh>
      <mesh rotation-x={Math.PI / 2.4} rotation-y={Math.PI / 4}>
        <torusGeometry args={[2.4, 0.008, 8, 120]} />
        <meshBasicMaterial color="#FF5722" transparent opacity={0.12} />
      </mesh>
    </motion.group>
  );
}

// ── Partículas de fondo ──────────────────────────────────────────────────────
function ParticleField() {
  const meshRef = useRef<any>(null);
  const count = 180;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#3A3A50"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// ── Export principal ─────────────────────────────────────────────────────────
export default function DataCore() {
  return (
    <div className="w-full h-[500px] lg:h-[650px] absolute inset-0 lg:relative z-0 pointer-events-none lg:pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} color="#FF5722" intensity={3} />
        <pointLight position={[-5, -5, -3]} color="#0064FF" intensity={1.5} />
        <spotLight position={[0, 8, 0]} angle={0.3} penumbra={1} intensity={2} color="#FF5722" />
        <ParticleField />
        <DataGraph />
      </Canvas>
    </div>
  );
}
