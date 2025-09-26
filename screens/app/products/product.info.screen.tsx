import { Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';

import { Container } from '@/components/container';
import CustomHeading from '@/components/custom-heading';
import { products } from '@/constants/data';
import CartActionButton from '@/features/products/components/ui/cart-action-buttons';
import { addToCart } from '@/features/products/redux/cartSlice';
import { setHeight, setWidth } from '@/helper/config';
import { CartItem } from '@/utils/types';

const ProductInfoScreen = () => {
  const dispatch = useDispatch();
  const [cartQty, setCartQty] = useState<number>(1);

  const { productId } = useLocalSearchParams<{ productId: string }>();
  const data = products.find((product) => String(product.id) === String(productId));

  if (!data) {
    return (
      <Container>
        <Text className="text-gray-600 mt-20 text-center text-lg">Product not found</Text>
      </Container>
    );
  }

  const increaseCartQty = () => setCartQty((prev) => prev + 1);

  const decreaseCartQty = () => setCartQty((prev) => (prev > 1 ? prev - 1 : prev));

  const addToCartAction = () => {
    const payload: CartItem = {
      id: data.id,
      name: data.title,
      category: data.category,
      image: data.image,
      price: data.price,
      qty: cartQty,
    };
    dispatch(addToCart(payload));
  };

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

      {/* Header */}
<View className='flex-col gap-4 bg-white h-full px-4'>
    <CustomHeading title="Product Information" showBackPress showCart />

      <ScrollView showsVerticalScrollIndicator={false} className='bg-white' contentContainerClassName='pb-10'>
        {/* Product Image */}
        <ImageBackground
          source={{ uri: data.image }}
          resizeMode="cover"
          style={styles.backgroundImage}
        />

        {/* Product Info */}
        <View className="w-full flex-col gap-10 bg-white py-4">
          <View className="flex-row items-center justify-between px-2">
            <View className="w-3/4 pr-4">
              <Text className="font-raleway-400 font-normal text-sm capitalize text-gray-400">
                {data.category}
              </Text>
              <Text className="font-raleway-600 font-semibold text-xl text-black">{data.title}</Text>
            </View>

            {/* Quantity Controls */}
            <CartActionButton
              qty={cartQty}
              onIncrease={increaseCartQty}
              onDecrease={decreaseCartQty}
            />
          </View>

          {/* Description */}
          <Text className="font-raleway-500 font-medium text-base text-black">{data.description}</Text>
        </View>

        {/* Price + Add to Cart */}
        <View className="flex-row items-center justify-start">
          <View className="w-1/4">
            <Text className="font-raleway-400 text-base font-normal text-gray-400">Price</Text>
            <Text className="font-raleway-600 text-lg font-semibold text-black">
              ${data.price.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={addToCartAction}
            className="h-[52px] w-3/4 flex-row items-center justify-center gap-4 rounded-[10px] bg-secondary">
            <Image
              source={require('@/assets/images/icons/bag-alt-icon.png')}
              className="h-6 w-6 object-contain"
            />
            <Text className="font-raleway-500 font-medium text-lg text-white">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
</View>
    </Container>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: setWidth(100),
    height: setHeight(52.2),
  },
});
