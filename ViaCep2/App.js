import { StatusBar, Text } from 'react-native';

import { ContainerApp } from './styles.js';

import { Header } from './src/components/Header/index.js';

import { Home } from './src/screens.js/Home/index.js';
//import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {

  const [ fontLoaded, fontError ] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>

      <Header/>

      <Home/>

    </ContainerApp>
  );
}


