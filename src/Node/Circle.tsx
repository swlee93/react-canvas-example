import { CanvasContextInterface } from '../Topology'
import { getRadian } from '../utils/common'

export interface CircleInterface extends CanvasContextInterface {
  x: number
  y: number
  radius?: number
  startAngle?: number
  endAngle?: number
  anticlockwise?: boolean
}
class Circle {
  private ctx: CanvasRenderingContext2D | null = null
  private size: DOMRect | null = null
  private x: number = 0
  private y: number = 0
  private radius: number = 0
  private startAngle: number = 0
  private endAngle: number = 0
  private anticlockwise?: boolean = false

  constructor(props: CircleInterface) {
    this.ctx = props.ctx
    this.size = props.size

    this.x = props.x || 0
    this.y = props.y || 0
    this.radius = props.radius || this.getRadius()
    this.startAngle = props.startAngle || 0
    this.endAngle = props.endAngle || getRadian(360)
    this.anticlockwise = props.anticlockwise || false

    this.draw()
  }
  getRadius = (): number => {
    return 50
  }
  draw = () => {
    const { ctx, x, y, radius, startAngle, endAngle, anticlockwise } = this
    if (ctx) {
      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
      ctx.fill()
      ctx.closePath()
      ctx.restore()
    }
  }
}

export default Circle
