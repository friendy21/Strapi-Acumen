"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D } from "@react-three/drei"
import * as THREE from "three"

// Service node data matching Acumen's ecosystem
const services = [
  { name: "Strategy", color: "#0A2463", position: [0, 2, 0] as [number, number, number] },
  { name: "Labs", color: "#00D4AA", position: [2, 1, 1] as [number, number, number] },
  { name: "Glynac", color: "#0066CC", position: [-2, 1, 1] as [number, number, number] },
  { name: "PHH", color: "#E2725B", position: [2, -1, -1] as [number, number, number] },
  { name: "Tollbooth", color: "#00C49A", position: [-2, -1, -1] as [number, number, number] },
  { name: "Talent", color: "#7B68EE", position: [0, -2, 0] as [number, number, number] },
]

function ServiceNode({ position, color, name }: { position: [number, number, number]; color: string; name: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
        {hovered && (
          <Text3D font="/fonts/inter_bold.json" size={0.2} height={0.05} position={[0, 0.8, 0]}>
            {name}
            <meshStandardMaterial color="#ffffff" />
          </Text3D>
        )}
      </mesh>
    </Float>
  )
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
    }
  })

  return (
    <group ref={linesRef}>
      {services.map((service, i) =>
        services.slice(i + 1).map((target, j) => {
          const points = [new THREE.Vector3(...service.position), new THREE.Vector3(...target.position)]
          const geometry = new THREE.BufferGeometry().setFromPoints(points)

          return (
            <line key={`${i}-${j}`} geometry={geometry}>
              <lineBasicMaterial color="#00D4AA" opacity={0.3} transparent />
            </line>
          )
        }),
      )}
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00D4AA" transparent opacity={0.6} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4AA" />

      <ParticleField />
      <ConnectionLines />

      {services.map((service, i) => (
        <ServiceNode key={i} {...service} />
      ))}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export function Hero3D() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    "Strategic Advisory, Technology, and Distribution Solutions",
    "Diagnose Challenges. Design Roadmaps. Deploy Solutions.",
    "From Strategy → Execution → Scale",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0A2463] via-[#1a1a2e] to-[#0A2463]">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-5xl">
          <h1 className="text-white mb-8 animate-fade-in">
            <span className="block text-balance">{phrases[currentPhrase]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 text-pretty max-w-3xl mx-auto">
            An integrated ecosystem of advisory, technology, and distribution solutions designed to transform financial
            advisory practices
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold rounded transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#00D4AA]/50">
              Explore Insights
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded backdrop-blur-sm border border-white/20 transition-all hover:scale-105">
              View Ecosystem
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}
