import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, PerspectiveCamera, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const count = 2000
  const points = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360) 
      const phi = THREE.MathUtils.randFloatSpread(360) 
      const distance = 10 + Math.random() * 20

      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi)
      const z = distance * Math.cos(theta)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    points.current.rotation.y = time * 0.05
    points.current.rotation.x = time * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
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
  )
}

function FloatingShapes() {
  return (
    <group>
      {/* Central Crystal-like shape */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 0, -5]} scale={1.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#63b3ed" 
            wireframe 
            transparent 
            opacity={0.4} 
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position={[2, 0, -5]} scale={1.48}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#3182ce" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>

      {/* Floating Cubes */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3, 2, -6]} scale={0.8}>
          <boxGeometry />
          <meshStandardMaterial color="#9f7aea" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1}>
        <mesh position={[-4, -2, -4]} scale={0.6}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="#f687b3" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      
       <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[4, 3, -8]} scale={1}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#4fd1c5" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  
  useFrame((state) => {
    // Parallax effect based on mouse position
    const { mouse } = state
    const x = (mouse.x * 2) 
    const y = (mouse.y * 2) 
    
    // Smoothly interpolate camera position
    state.camera.position.x += (x - state.camera.position.x) * 0.05
    state.camera.position.y += (y - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} ref={cameraRef} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4fd1c5" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#9f7aea" />
      <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#63b3ed" />
      
      <ParticleField />
      <FloatingShapes />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#edf2f7" />
      
      <fog attach="fog" args={['#0f172a', 10, 40]}  />
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
        zIndex: -1,
        background: 'linear-gradient(to bottom, #0f172a, #1a202c)',
      }}
    >
      <Canvas dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  )
}
