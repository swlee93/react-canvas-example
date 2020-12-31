import { CircleInterface } from '../Node/Circle'
import { RectInterface } from '../Node/Rect'
export const getRadian = (degree: number) => (degree * Math.PI) / 180
export const getSize = (sizeMirror: HTMLDivElement) => sizeMirror.getBoundingClientRect()
export const getCircleAttrs = ({ data, length, datum, index, size }: any): Partial<CircleInterface> => {
  const dataLength = length || data?.length || 0
  const ratio = size.width / size.height
  const squreShortSide = Math.min(size.width, size.height)
  const squreLongSide = Math.max(size.width, size.height)
  const squreArea = Math.pow(squreShortSide, 2)
  const circleWidth = Math.sqrt(squreArea / dataLength)
  const radius = circleWidth / 2
  const spreadX = radius + index * circleWidth
  const floor = Math.floor(spreadX / squreLongSide)
  const column = Math.floor(squreLongSide / circleWidth)
  console.log('column, floor', column, floor)
  const x = radius + (index % column) * circleWidth
  const y = radius + floor * circleWidth

  return { x, y, radius }
}

export const getRectAttrs = ({ data, datum, index, size }: any): Partial<RectInterface> => {
  const dataLength = data?.length || 0
  const ratio = size.width / size.height
  const squreShortSide = Math.min(size.width, size.height)
  const squreLongSide = Math.max(size.width, size.height)
  const squreArea = Math.pow(squreShortSide, 2)
  const width = Math.sqrt(squreArea / dataLength)
  const height = width
  const radius = width / 2
  const spreadX = radius + index * width
  const floor = Math.floor(spreadX / squreLongSide)
  const column = Math.floor(squreLongSide / width)
  console.log('column, floor', column, floor)
  const x = radius + (index % column) * width
  const y = radius + floor * width

  return { x, y, width, height }
}
