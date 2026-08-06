import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { galaxyTech } from '../../data/content'

function TechNode({ tech, hovered, setHovered }) {
  const ref = useRef()
  const active = hovered === tech.key

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * tech.speed + tech.phase
    ref.current.position.set(
      Math.cos(t) * tech.radius,
      Math.sin(t * 0.7) * tech.tiltY,
      Math.sin(t) * tech.radius,
    )
    const s = active ? 1.8 : 1
    ref.current.scale.lerp({ x: s, y: s, z: s }, 0.15)
  })

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
          setHovered(tech.key)
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
          setHovered(null)
        }}
        onClick={(e) => {
          e.stopPropagation()
          setHovered(active ? null : tech.key)
        }}
      >
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial
          color={active ? '#a9a9ff' : '#d6d6dc'}
          emissive={active ? '#8b8bf8' : '#000000'}
          emissiveIntensity={active ? 0.9 : 0}
        />
      </mesh>
      {active && (
        <Html center position={[0, 0.3, 0]} zIndexRange={[30, 0]} style={{ pointerEvents: 'none' }}>
          <div className="rounded-xl border border-white/10 bg-[#0c0c11]/95 px-4 py-3 text-center shadow-soft backdrop-blur">
            <div className="font-display text-sm font-semibold text-white">{tech.name}</div>
            <div className="mt-0.5 font-mono text-[10px] text-white/45">{tech.note}</div>
          </div>
        </Html>
      )}
    </group>
  )
}

function Galaxy() {
  const ring = useRef()
  const inner = useRef()
  const outer = useRef()
  const [hovered, setHovered] = useState(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring.current) ring.current.rotation.z = t * 0.03
    if (inner.current) inner.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06)
    if (outer.current) outer.current.scale.setScalar(1 + Math.sin(t * 1.1 + 2) * 0.05)
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={1.4} color="#8b8bf8" distance={9} />

      <mesh ref={inner}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshBasicMaterial color="#a9a9ff" />
      </mesh>
      <mesh ref={outer}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial color="#8b8bf8" transparent opacity={0.1} depthWrite={false} />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.75, 0.008, 16, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>

      {galaxyTech.map((tech) => (
        <TechNode key={tech.key} tech={tech} hovered={hovered} setHovered={setHovered} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.6}
      />
    </>
  )
}

export default function SkillsGalaxy() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.2, 5.4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Galaxy />
    </Canvas>
  )
}
