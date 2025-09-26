import { Stack } from 'expo-router';

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
       <Stack.Screen 
        name="index" 
      />
      <Stack.Screen
        name="[productId]"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="cart" />
      <Stack.Screen name="checkout" />
    </Stack>
  );
};
