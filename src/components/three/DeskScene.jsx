import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const dark = '#0d0d12'
const mid = '#17171d'
const light = '#22222a'
const accent = '#8b8bf8'
const SURFACE_Y = 0.545

function createScreenTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 320
  const ctx = canvas.getContext('2d')

  const g = ctx.createLinearGradient(0, 0, 512, 320)
  g.addColorStop(0, '#0c0c12')
  g.addColorStop(1, '#14141c')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 512, 320)

  ctx.fillStyle = 'rgba(255,255,255,0.06)'
  ctx.fillRect(0, 0, 512, 36)
  ctx.fillStyle = accent
  ctx.fillRect(0, 36, 512, 2)

  ctx.fillStyle = 'rgba(255,255,255,0.04)'
  ctx.fillRect(0, 38, 110, 282)
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'rgba(255,255,255,0.10)'
    ctx.fillRect(18, 60 + i * 34, 70, 10)
  }

  const colors = ['#8b8bf8', '#a9a9ff', '#4a4a7a']
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = 'rgba(255,255,255,0.06)'
    ctx.fillRect(130, 60 + i * 56, 240, 44)
    ctx.fillStyle = colors[i % 3]
    ctx.fillRect(130, 72 + i * 56, 40, 6)
  }

  ctx.strokeStyle = 'rgba(139,139,248,0.6)'
  ctx.lineWidth = 2
  ctx.beginPath()
  for (let x = 0; x < 240; x += 2) {
    const y = 210 - Math.sin(x / 18) * 18 - Math.cos(x / 37) * 12
    if (x === 0) ctx.moveTo(130 + x, y)
    else ctx.lineTo(130 + x, y)
  }
  ctx.stroke()

  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(130, 240 + i * 14, 300, 8)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.anisotropy = 4
  return tex
}

function Monitor({ position, texture }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[0.55, 0.05, 0.24]} />
        <meshStandardMaterial color={dark} metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.21, 0]}>
        <boxGeometry args={[0.2, 0.32, 0.05]} />
        <meshStandardMaterial color={dark} metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.9, 1.15, 0.06]} />
        <meshStandardMaterial color={dark} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.55, 0.035]}>
        <planeGeometry args={[1.8, 1.05]} />
        <meshStandardMaterial color="#000000" emissive="#ffffff" emissiveMap={texture} emissiveIntensity={1} />
      </mesh>
    </group>
  )
}

function Laptop({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[1.1, 0.05, 0.78]} radius={0.02} smoothness={4} position={[0, 0.025, 0]}>
        <meshStandardMaterial color={mid} metalness={0.5} roughness={0.35} />
      </RoundedBox>
      <group position={[0, 0.4, -0.32]} rotation={[-0.28, 0, 0]}>
        <mesh>
          <boxGeometry args={[1.0, 0.56, 0.035]} />
          <meshStandardMaterial color={dark} metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[0.9, 0.46]} />
          <meshStandardMaterial color="#050507" emissive={accent} emissiveIntensity={0.35} />
        </mesh>
      </group>
    </group>
  )
}

function Keyboard({ position, rotation }) {
  const rows = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5],
  ]
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[1.0, 0.04, 0.34]} radius={0.015} smoothness={4} position={[0, 0.02, 0]}>
        <meshStandardMaterial color="#111118" metalness={0.4} roughness={0.4} />
      </RoundedBox>
      {rows.map((row, r) =>
        row.map((_, c) => (
          <mesh key={`${r}-${c}`} position={[(c - (row.length - 1) / 2) * 0.105, 0.05, (r - 1) * 0.09]}>
            <boxGeometry args={[0.075, 0.022, 0.075]} />
            <meshStandardMaterial color={light} metalness={0.3} roughness={0.5} />
          </mesh>
        )),
      )}
    </group>
  )
}

function Mouse({ position }) {
  return (
    <RoundedBox args={[0.24, 0.1, 0.32]} radius={0.09} smoothness={6} position={position}>
      <meshStandardMaterial color={mid} metalness={0.4} roughness={0.4} />
    </RoundedBox>
  )
}

function Mug({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.1, 0.085, 0.16, 24]} />
        <meshStandardMaterial color="#191920" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0.11, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.05, 0.014, 8, 20]} />
        <meshStandardMaterial color="#191920" metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  )
}

function Steam({ position }) {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.children.forEach((child, i) => {
      const p = (t * 0.5 + i * 0.35) % 1
      child.position.y = position[1] + p * 0.5
      child.position.x = position[0] + Math.sin(t * 1.5 + i) * 0.03
      child.material.opacity = 0.25 * (1 - p)
    })
  })
  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[position[0], position[1], position[2]]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

function Notebook({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[0.52, 0.025, 0.36]} radius={0.01} smoothness={3} position={[0, 0.012, 0]}>
        <meshStandardMaterial color="#0e0e14" metalness={0.2} roughness={0.7} />
      </RoundedBox>
      <mesh position={[0.2, 0.012, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.05, 0.018, 0.012]} />
        <meshStandardMaterial color="#e8e8ee" metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  )
}

function Plant({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.13, 0.09, 0.16, 20]} />
        <meshStandardMaterial color="#1a1a22" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.2, 8]} />
        <meshStandardMaterial color="#2a2a33" />
      </mesh>
      {[
        { x: 0, z: 0.06, ry: 0, rx: -0.5, sx: 1, sy: 1.2 },
        { x: 0.05, z: -0.02, ry: 0.6, rx: -0.9, sx: 0.8, sy: 1.1 },
        { x: -0.05, z: -0.02, ry: -0.6, rx: -0.9, sx: 0.8, sy: 1.1 },
        { x: 0.03, z: -0.05, ry: 1.1, rx: -0.4, sx: 0.7, sy: 1.0 },
      ].map((leaf, i) => (
        <mesh
          key={i}
          position={[leaf.x, 0.3, leaf.z]}
          rotation={[leaf.rx, leaf.ry, 0]}
          scale={[leaf.sx, leaf.sy, 1]}
        >
          <planeGeometry args={[0.22, 0.3]} />
          <meshStandardMaterial
            color="#2c2c36"
            side={THREE.DoubleSide}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

function Desk() {
  const pivot = useRef()
  const texture = useMemo(() => createScreenTexture(), [])

  useFrame((state) => {
    if (!pivot.current) return
    const t = state.clock.elapsedTime
    const scroll = Math.min(window.scrollY || 0, 1400)
    pivot.current.rotation.y = -0.42 + Math.sin(t * 0.1) * 0.16 + scroll * 0.00025
    pivot.current.position.y = Math.sin(t * 0.8) * 0.04 - scroll * 0.0006
  })

  const legs = [
    [-1.55, -0.25, -0.75],
    [1.55, -0.25, -0.75],
    [-1.55, -0.25, 0.75],
    [1.55, -0.25, 0.75],
  ]

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} />
      <directionalLight position={[-4, 3, -2]} intensity={0.3} color="#aab" />
      <pointLight position={[0, 1.7, 1.4]} intensity={0.7} color={accent} distance={4.5} />

      <group ref={pivot}>
        <Float speed={1.2} rotationIntensity={0.14} floatIntensity={0.7}>
          <RoundedBox args={[3.4, 0.09, 1.7]} radius={0.05} position={[0, 0.5, 0]}>
            <meshStandardMaterial color={mid} metalness={0.35} roughness={0.5} />
          </RoundedBox>
          {legs.map((p, i) => (
            <mesh key={i} position={p}>
              <boxGeometry args={[0.1, 0.55, 0.1]} />
              <meshStandardMaterial color={dark} metalness={0.4} roughness={0.4} />
            </mesh>
          ))}

          <Monitor position={[-0.55, SURFACE_Y, -0.15]} texture={texture} />
          <Laptop position={[0.98, SURFACE_Y, 0.15]} rotation={[0, -0.55, 0]} />
          <Keyboard position={[0.42, SURFACE_Y, 0.55]} rotation={[0, -0.15, 0]} />
          <Mouse position={[-0.05, SURFACE_Y, 0.62]} />
          <Mug position={[1.32, SURFACE_Y, 0.5]} />
          <Notebook position={[-1.25, SURFACE_Y, 0.42]} rotation={[0, 0.25, 0]} />
          <Plant position={[1.42, SURFACE_Y, -0.55]} />
        </Float>
      </group>

      <Steam position={[1.32, 0.72, 0.5]} />
      <ContactShadows position={[0, 0, 0]} opacity={0.55} scale={9} blur={2.6} far={3.2} color="#000000" />
    </>
  )
}

export default function DeskScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 1.15, 4.9], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Desk />
    </Canvas>
  )
}
