import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from '../../theme'

function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Field({ count }) {
  const ref = useRef()
  const theme = useTheme()
  const positions = useMemo(() => {
    const rand = mulberry32(1234)
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 26
      arr[i * 3 + 1] = (rand() - 0.5) * 14
      arr[i * 3 + 2] = (rand() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.018
  })

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={theme === 'dark' ? '#ffffff' : '#10101a'} transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  )
}

export default function Particles({ count = 420 }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Field count={count} />
    </Canvas>
  )
}
