/* eslint-disable camelcase */

import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { Slot } from 'expo-router'
import { ThemeProvider } from 'styled-components/native'

import { LoadingIndicator } from '@/components/LoadingIndicator'
import getTheme from '@/theme/default'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  

  return (
    <ThemeProvider theme={() => getTheme({type: 'dark'})}>
      
      {fontsLoaded ? <Slot /> : <LoadingIndicator />}
      
    </ThemeProvider>
  )
}
