import { theme } from "./Theme"

type FontPropsType = {
  family?: string
  weigth?: number
  color?: string
  lineHeight? : number
  Fmin?: number
  Fmax?: number
}


export const font = ( {family, weigth, color, lineHeight, Fmin, Fmax }: FontPropsType ) => `
  font-family: ${family || 'Poppins'};
  font-weight: ${weigth || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.5};
font-size: calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px) ;
`