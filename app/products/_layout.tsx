import { Stack } from 'expo-router';

const ProductLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
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
export default ProductLayout;
