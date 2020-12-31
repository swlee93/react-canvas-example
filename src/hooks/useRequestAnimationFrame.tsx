import { useEffect } from 'react'

export const useRequestAnimationFrame = (draw: () => void, { interval = 1 }) => {
  let frame = 0

  const animationFrame = requestAnimationFrame(() => {
    frame += 1
    if (frame % interval !== 0) {
      draw()
    }
  })

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])
}
export default useRequestAnimationFrame
