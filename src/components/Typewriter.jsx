import { useEffect, useState } from 'react'

export default function Typewriter({ words = [], speed = 80, pause = 1200 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex(v => v + 1)
    }, speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, speed])

  useEffect(() => {
    if (subIndex === words[index].length + 1) {
      const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), pause)
      return () => clearTimeout(t)
    }
    if (subIndex > words[index].length) return
  }, [subIndex, index, words, pause])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => setSubIndex(0), [index])

  return (
    <span>
      {words[index].slice(0, subIndex)}<span className="text-white">{blink ? '|' : ' '}</span>
    </span>
  )
}
