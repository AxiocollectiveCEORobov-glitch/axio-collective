"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Wireframe } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useScroll, useTransform } from "framer-motion";

function CoreModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollY } = useScroll();

  // Despiece (Exploded View) baseado en scroll
  // Transformamos el scroll (0 a 1000px) en distancia de separación
  const separation = useTransform(scrollY, [0, 800], [0, 2]);
  const rotationY = useTransform(scrollY, [0, 1000], [0, Math.PI]);

  // Rotación suave continua
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <motion.group ref={groupRef} rotation-y={rotationY}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Núcleo Central */}
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#FF5722" wireframe opacity={0.3} transparent />
        </mesh>
        <mesh scale={0.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#FF5722" emissive="#FF5722" emissiveIntensity={0.5} />
        </mesh>

        {/* Anillo Exterior 1 */}
        <motion.mesh y={separation}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#A8A8C0" metalness={0.8} roughness={0.2} />
        </motion.mesh>

        {/* Anillo Exterior 2 (Rotado) */}
        <motion.mesh y={useTransform(separation, (v) => -v)} rotation-x={Math.PI / 2}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshBasicMaterial color="#FF5722" />
        </motion.mesh>

        {/* Estructuras de Datos Superiores */}
        <motion.mesh y={useTransform(separation, (v) => v * 1.5)}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#1E1E2A" metalness={0.9} roughness={0.1} />
          <Wireframe thickness={0.02} stroke={"#FF5722"} />
        </motion.mesh>
        <motion.mesh y={useTransform(separation, (v) => v * 2.2)} scale={0.5}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#3A3A50" wireframe />
        </motion.mesh>

        {/* Estructuras de Datos Inferiores */}
        <motion.mesh y={useTransform(separation, (v) => -v * 1.5)}>
          <cylinderGeometry args={[0.3, 0.3, 0.8, 6]} />
          <meshStandardMaterial color="#1E1E2A" metalness={0.9} roughness={0.1} />
          <Wireframe thickness={0.02} stroke={"#0064FF"} />
        </motion.mesh>

      </Float>
    </motion.group>
  );
}

export default function ExplodedModel() {
  return (
    <div className="w-full h-[500px] lg:h-[600px] absolute inset-0 lg:relative z-0 pointer-events-none lg:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#FF5722" intensity={2} />
        <CoreModel />
      </Canvas>
    </div>
  );
}
