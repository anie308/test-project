import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'regular': require('./assets/fonts/regular.otf'),
    'medium': require('./assets/fonts/medium.otf'),
    'bold': require('./assets/fonts/bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Route/>
    </SafeAreaProvider>
  );
}


