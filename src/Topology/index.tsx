import { createContext } from 'react'
import Topology from './Topology'

export interface CanvasContextInterface {
  ctx: CanvasRenderingContext2D | null
  size: DOMRect | null
}

export const CanvasContext = createContext<CanvasContextInterface>({ ctx: null, size: null })

export default Topology
