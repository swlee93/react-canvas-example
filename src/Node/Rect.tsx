import { CanvasContextInterface } from '../Topology'
import { getRadian } from '../utils/common'

export interface RectInterface extends CanvasContextInterface {
  x?: number
  y?: number
  width?: number
  height?: number
}
class Rect {
  private ctx: CanvasRenderingContext2D | null = null
  private size: DOMRect | null = null
  private x: number = 0
  private y: number = 0
  private width: number = 0
  private height: number = 0

  constructor(props: RectInterface) {
    this.ctx = props.ctx
    this.size = props.size

    this.x = props.x || 0
    this.y = props.y || 0
    this.width = props.width || 0
    this.height = props.height || 0

    this.draw()
  }
  getRadius = (): number => {
    return 50
  }
  draw = () => {
    const { ctx, x, y, width, height } = this
    if (ctx) {
      ctx.save()
      ctx.beginPath()
      ctx.rect(x, y, width, height)
      ctx.fill()
      ctx.closePath()
      ctx.restore()
    }
  }
}

export default Rect
