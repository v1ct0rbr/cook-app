import { ColorsType } from '@/types/colors'
import { borderRadius } from './borderRadius'
import { darkColors } from './darkColors'
import { fonts } from './fonts'
import { lightColors } from './lightColors'

interface ThemeProps {
    type?: 'light' | 'dark'
}

export type ThemeType = {
    colors: ColorsType
    fonts: typeof fonts
    borderRadius: typeof borderRadius
}

export default function getTheme({type = 'dark'}: ThemeProps): ThemeType {
    const customColors = type ? lightColors : darkColors;
  return { colors: customColors , fonts, borderRadius }
} 

