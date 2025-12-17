"use client"

import type React from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import * as THREE from "three"

const ecosystemServices = [
  {
    id: "strategy",
    name: "Acumen Strategy",
    color: "#0A2463",
    position: [0, 0, 0] as [number, number, number],
    description: "Strategic advisory and consulting services",
    metrics: "250+ RIA partnerships",
  },
  {
    id: "labs",
    name: "Acumen Labs",
    color: "#00D4AA",
    position: [3, 1.5, 0] as [number, number, number],
    description: "Innovation and product development",
    metrics: "15+ products launched",
  },
  {
    id: "glynac",
    name: "Glynac AI",
    color: "#0066CC",
    position: [-3, 1.5, 0] as [number, number, number],
    description: "AI-powered advisory tools",
    metrics: "2M+ client interactions",
  },
  {
    id: "phh",
    name: "PHH Real Estate",
    color: "#E2725B",
    position: [3, -1.5, 0] as [number, number, number],
    description: "Real estate investment solutions",
    metrics: "$500M+ AUM",
  },
  {
    id: "tollbooth",
    name: "Tollbooth",
    color: "#00C49A",
    position: [-3, -1.5, 0] as [number, number, number],
    description: "Distribution platform",
    metrics: "100+ product integrations",
  },
  {
    id: "talent",
    name: "Talent Solutions",
    color: "#7B68EE",
    position: [0, -3, 0] as [number, number, number],
    description: "Recruitment and team building",
    metrics: "500+ placements",
  },
]

function EcosystemNode({
  service,
  onClick,
  isActive,
}: {
  service: (typeof ecosystemServices)[0]
  onClick: () => void
  isActive: boolean
}) {
  return (
    <mesh position={service.position} onClick={onClick} scale={isActive ? 1.3 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={service.color}
        emissive={service.color}
        emissiveIntensity={isActive ? 0.8 : 0.3}
        metalness={0.8}
        roughness={0.2}
      />
      {isActive && (
        <Html position={[0, 1, 0]} center>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-gray-200 w-64">
            <h3 className="font-bold text-lg mb-2" style={{ color: service.color }}>
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{service.description}</p>
            <p className="text-xs font-semibold text-gray-800">{service.metrics}</p>
          </div>
        </Html>
      )}
    </mesh>
  )
}

function ConnectionWeb() {
  const lines: React.ReactElement[] = []

  ecosystemServices.forEach((service, i) => {
    ecosystemServices.slice(i + 1).forEach((target, j) => {
      const points = [new THREE.Vector3(...service.position), new THREE.Vector3(...target.position)]
      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      lines.push(
        <line key={`${i}-${j}`} geometry={geometry}>
          <lineBasicMaterial color="#00D4AA" opacity={0.2} transparent linewidth={2} />
        </line>,
      )
    })
  })

  return <group>{lines}</group>
}

export function EcosystemPortal() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-[#0A2463]/10 to-[#00D4AA]/10 rounded-xl overflow-hidden border border-border">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4AA" />

        <ConnectionWeb />

        {ecosystemServices.map((service) => (
          <EcosystemNode
            key={service.id}
            service={service}
            onClick={() => setActiveService(service.id === activeService ? null : service.id)}
            isActive={activeService === service.id}
          />
        ))}

        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-700 shadow-lg">
        Click and drag to explore • Tap nodes for details
      </div>
    </div>
  )
}
