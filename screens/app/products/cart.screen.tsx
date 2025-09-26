import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from '@/components/container';
import CustomHeading from '@/components/custom-heading';
import ProductCartItem from '@/features/products/components/product-cart-item';
import { CartState } from '@/utils/types';

const CartScreen = () => {
  const router = useRouter();
  const { cartList, cartTotalAmount } = useSelector((state: { cart: CartState }) => state.cart);

  return (
    <Container>
      {/* StatusBar */}
      <StatusBar
        style="auto"
        translucent={Platform.OS === 'android'}
        backgroundColor={Platform.OS === 'android' ? 'rgba(0,0,0,0)' : undefined}
      />

      {/* Hide Expo Router Stack Header */}
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeading title="My Cart" showBackPress showCart />
      {cartList.length >= 1 ? (
        <View className="relative w-full flex-1 flex-col px-4 py-6 bg-white">
          <FlatList
            data={cartList}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ProductCartItem item={item} />}
          />
          {/* Pinned Bottom Button */}
          <View className="absolute bottom-10 left-4 right-4">
            <TouchableOpacity
              onPress={() => router.push('/products/checkout')}
              className="h-[52px] w-full flex-row items-center justify-center gap-4 rounded-[10px] bg-secondary">
              <Image
                source={require('@/assets/images/icons/bag-alt-icon.png')}
                className="h-6 w-6 object-contain"
              />
              <Text className="font-rebond-500 text-base font-medium text-white">
                Checkout (${Number(cartTotalAmount.toFixed(2))})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="mt-[228px] w-full items-center justify-center gap-4 px-4">
          <Image
            source={require('@/assets/images/icons/cart-icon.png')}
            className="h-16 w-16 object-center"
            alt="notification icon"
          />
          <View className="flex-col items-center justify-center gap-2 px-[71px]">
            <Text className="text-center font-rebond-600 text-xl font-semibold text-black">
              Your Cart Is Empty!
            </Text>
            <Text className="text-center font-common-500 text-base font-medium text-black">
              When you add products, they’ll appear here.
            </Text>
          </View>
        </View>
      )}
    </Container>
  );
};

export default CartScreen;
