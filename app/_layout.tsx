import store from '@/redux/store';
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  useFonts,
} from '@expo-google-fonts/raleway';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import '../global.css';
import "../sheet";

export default function Layout() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="item-center h-screen w-full flex-1 justify-center">
        <ActivityIndicator shouldRasterizeIOS size={16} />
      </View>
    );
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SheetProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
            }}>
            {/* Screens registered with Expo Router */}
            <Stack
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
              }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="products" />
            </Stack>
          </Stack>
        </SheetProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
