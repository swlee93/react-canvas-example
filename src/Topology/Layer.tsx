import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { CanvasContext } from '.'
import Circle from '../Node/Circle'
import { getRadian, getSize, getCircleAttrs, getRectAttrs } from '../utils/common'
import { TopologyContext } from './Topology'
import { Canvas } from './TopologyStyle'
const Layer = ({ data, size, index }: { data: any[]; size: any; index: number }) => {
  const { data: topologyData } = useContext(TopologyContext)
  const canvas = useRef<HTMLCanvasElement>(null)

  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvas?.current) {
      setCtx(canvas.current.getContext('2d'))
    }
  }, [])

  const draw = () => {
    console.log('draw', size, data)

    const circles = data.reduce((acc, datum, index) => {
      const { x, y, radius } = getCircleAttrs({ data, datum, index, size, length: topologyData?.length })

      if (x && y) {
        const circle = new Circle({ ctx, size, x, y, radius })
        acc.push(circle)
      }
      return acc
    }, [])
  }
  useEffect(() => {
    console.log('data', data)
    if (!canvas?.current || !size || !ctx) return
    draw()
  }, [data, size, !!ctx, !!canvas?.current, topologyData])
  return <Canvas index={index} ref={canvas} width={window.innerWidth} height={window.innerHeight} />
}

export default Layer
