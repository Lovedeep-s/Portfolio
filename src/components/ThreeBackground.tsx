import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const count = 2000;
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = 10 + Math.random() * 20;

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4fd1c5"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4fd1c5" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#9f7aea" />
      <spotLight
        position={[0, 10, 0]}
        intensity={1}
        angle={0.5}
        penumbra={1}
        color="#63b3ed"
      />

      <ParticleField />
      <Stars
        radius={100}
        depth={5}
        count={50000}
        factor={4}
        saturation={0}
        fade
        speed={1.2}
      />
      <Sparkles
        count={500}
        scale={12}
        size={2}
        speed={0.4}
        opacity={0.5}
        color="#edf2f7"
      />

      <fog attach="fog" args={["#0f172a", 10, 40]} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(to bottom, #0f172a,rgb(9, 11, 15))",
      }}
    >
      <Canvas dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
