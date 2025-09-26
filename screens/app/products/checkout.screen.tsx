import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Container } from '@/components/container';
import { clearCart } from '@/features/products/redux/cartSlice';
import { setHeight, setWidth } from '@/helper/config';

const CheckoutScreen = () => {
  const { replace } = useRouter();
  const dispatch = useDispatch();

  const proceedShoppingAction = () => {
    dispatch(clearCart());
    replace('/products');
  };

  return (
    <Container>
      <ImageBackground
        source={require('@/assets/images/checkout-bg.png')}
        resizeMode="contain"
        style={{ width: setWidth(100), height: setHeight(100) }}
        className="items-center justify-start">
        <View className="mt-40 w-full items-center justify-center gap-2 px-[71px]">
          <Text className="text-center font-raleway-600 text-2xl font-semibold text-black">
            Success!
          </Text>
          <Text className="text-center font-raleway-400 text-base font-normal tracking-normal">
            Your order will be delivered soon. Thank you for choosing our app!!
          </Text>
          <TouchableOpacity
            onPress={proceedShoppingAction}
            className="h-[52px] min-w-[140px] flex-row items-center justify-center gap-4 rounded-[10px] bg-secondary px-6">
            <Text className="font-raleway-500 text-base font-medium text-white">
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default CheckoutScreen;
