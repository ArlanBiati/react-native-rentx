import React from 'react';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/global/theme';

import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { CarDetails } from './src/screens/CarDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <CarDetails />
    </ThemeProvider>
  );
}
