import styled from 'styled-components'
interface ThemeAttrs {
  bg_color?: string
}
interface ThemeProvided {
  theme?: ThemeAttrs
  index?: number
}
export const Canvas = styled.canvas<ThemeProvided>`
  background-color: ${(props) => props.theme.bg_color || `#f0f0f0`};
  width: 100%;
  height: 100%;
  position: absolute;
  transform: perspective(300px) rotateX(45deg) translate3d(0px, 0px, ${(props) => 100 + (props.index || 0) * -100}px);
`
export const SizeMirror = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const LayersGrid = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`
