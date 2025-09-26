import { Container } from '@/components/container';
import { setCartList } from '@/features/products/redux/cartSlice';
import { CART_KEY } from '@/helper/config';
import { loadCart } from '@/utils/storage';
import { CartState } from '@/utils/types';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, Image, Platform, View } from 'react-native';
import { useDispatch } from 'react-redux';

const WelcomeScreen = () => {
  const { replace } = useRouter();
  const dispatch = useDispatch();

  const redirectEntry = async () => {
    const savedCart = await loadCart<CartState>(CART_KEY);
    if (savedCart?.cartList) {
      dispatch(setCartList(savedCart.cartList));
      setTimeout(() => {
        replace('/products');
      }, 2000);
    }
  };

  useEffect(() => {
    redirectEntry();
  }, []);
  return (
    <Container>
      <StatusBar
        style="light"
        translucent={Platform.OS === 'android'}
        backgroundColor={Platform.OS === 'android' ? 'rgba(0,0,0,0' : ''}
      />
      <View className={customStyles.splashContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          alt="GiriToday Logo"
          className={customStyles.splashImgLogo}
        />
        <ActivityIndicator
          shouldRasterizeIOS
          className={customStyles.splashActivityLoader}
          color="#fec32f"
        />
      </View>
    </Container>
  );
};

export default WelcomeScreen;
const customStyles = {
  splashContainer: `flex-col bg-secondary flex-1 items-center justify-center`,
  splashImgLogo: 'h-[55px] w-[61px] object-contain mb-4',
  splashActivityLoader: `h-20 w-20`,
};
