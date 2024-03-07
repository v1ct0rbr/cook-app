import { } from 'styled-components/native'

import { ThemeType } from '@/theme/default'

declare module 'styled-components/native' {

  export interface DefaultTheme extends ThemeType { }
}
