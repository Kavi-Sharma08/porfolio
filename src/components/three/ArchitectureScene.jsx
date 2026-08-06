import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { architecture } from '../../data/content'
import { useTheme } from '../../theme'

const PALETTES = {
  dark: {
    node: '#17171d',
    selected: '#a9a9ff',
    emissive: '#4a4a7a',
    emissiveSelected: '#8b8bf8',
    emissiveIdle: 0.25,
    emissiveSelectedIntensity: 0.9,
    lineColor: '#8b8bf8',
    lineOpacity: 0.22,
  },
  light: {
    node: '#ffffff',
    selected: '#8b8bf8',
    emissive: '#8b8bf8',
    emissiveSelected: '#6d6def',
    emissiveIdle: 0.35,
    emissiveSelectedIntensity: 0.55,
    lineColor: '#6d6def',
    lineOpacity: 0.5,
  },
}

const POS = {
  browser: [-2.6, 0.2, 0],
  frontend: [-1.3, 0.7, 0.5],
  api: [0, 1.1, 0.9],
  backend: [1.3, 0.7, 0.5],
  database: [2.6, 0.2, 0],
}

function Node({ layer, position, selected, onSelect, onOver, onOut, p }) {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) return
    const s = selected ? 1.5 : 1
    ref.current.scale.lerp({ x: s, y: s, z: s }, 0.12)
  })
  return (
    <group position={position}>
      <mesh
        ref={ref}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(layer.key)
        }}
        onPointerOver={onOver}
        onPointerOut={onOut}
      >
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial
          color={selected ? p.selected : p.node}
          emissive={selected ? p.emissiveSelected : p.emissive}
          emissiveIntensity={selected ? p.emissiveSelectedIntensity : p.emissiveIdle}
          metalness={0.3}
          roughness={0.3}
        />
      </mesh>
      <Html center position={[0, -0.52, 0]} zIndexRange={[30, 0]} style={{ pointerEvents: 'none' }}>
        <div className="whitespace-nowrap rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/70 backdrop-blur">
          {layer.name}
        </div>
      </Html>
    </group>
  )
}

function Flow({ p }) {
  const group = useRef()
  const keys = architecture.map((a) => a.key)
  const lines = []
  for (let i = 0; i < keys.length - 1; i++) lines.push([POS[keys[i]], POS[keys[i + 1]]])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.12
  })

  return (
    <group ref={group}>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color={p.lineColor} transparent opacity={p.lineOpacity} lineWidth={1.2} />
      ))}
    </group>
  )
}

export default function ArchitectureScene({ selected, onSelect }) {
  const theme = useTheme()
  const p = PALETTES[theme]
  const handleOver = () => {
    document.body.style.cursor = 'pointer'
  }
  const handleOut = () => {
    document.body.style.cursor = 'auto'
  }
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.4, 6.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={1} />
      <pointLight position={[0, 2, 2]} intensity={0.6} color="#8b8bf8" />

      <Flow p={p} />
      {architecture.map((layer) => (
        <Node
          key={layer.key}
          layer={layer}
          position={POS[layer.key]}
          selected={selected === layer.key}
          onSelect={onSelect}
          onOver={handleOver}
          onOut={handleOut}
          p={p}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  )
}
