import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const count = 2000
  const points = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      const distance = 10 + (i % 20)
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = distance * Math.cos(theta)
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    points.current.rotation.y = time * 0.04
    points.current.rotation.x = time * 0.015
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particlesPosition, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#2463eb"
        sizeAttenuation
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.45} />
      <pointLight position={[10, 10, 10]} intensity={0.7} color="#2463eb" />
      <pointLight position={[-8, -6, -10]} intensity={0.35} color="#3b74f5" />

      <ParticleField />

      <Stars
        radius={100}
        depth={5}
        count={12000}
        factor={3}
        saturation={0}
        fade
        speed={0.45}
      />

      <fog attach="fog" args={['#050814', 14, 48]} />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'var(--aurora-bg)',
      }}
    >
      <Canvas dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  )
}
