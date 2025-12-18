"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense } from "react"

function ResinSphere() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh castShadow>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

function ResinDrop({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color="#06b6d4"
          transparent
          opacity={0.7}
          roughness={0}
          metalness={0.9}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export function FloatingResin() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <ResinSphere />
          <ResinDrop position={[-2, 1, 0]} />
          <ResinDrop position={[2, -1, 0]} />
          <ResinDrop position={[0, 2, -1]} />

          <Environment preset="studio" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
