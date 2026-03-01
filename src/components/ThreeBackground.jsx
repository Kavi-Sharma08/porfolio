import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Particles({ count = 800 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3 + 0] = (Math.random() - 0.5) * 12
      arr[i3 + 1] = (Math.random() - 0.5) * 6
      arr[i3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0008 * state.clock.getDelta() * 60
  })

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.045} sizeAttenuation color="#00d4ff" transparent opacity={0.85} depthWrite={false} />
    </points>
  )
}

export default function ThreeBackground({ className = 'h-[480px]' }) {
  return (
    <div className={`w-full ${className} rounded-2xl overflow-hidden`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <Particles count={900} />
      </Canvas>
    </div>
  )
}
