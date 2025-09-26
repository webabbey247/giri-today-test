import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CartState, CustomHeaderProps } from '@/utils/types';

const CustomHeading: React.FC<CustomHeaderProps> = ({
  title,
  showBackPress,
  showCart,
  onBackPress,
}) => {
  const router = useRouter();
  const { cartList } = useSelector((state: { cart: CartState }) => state.cart);

  return (
    <View
      className={`${
        title === 'Product Information' ? 'mt-6' : 'mt-10'
      } w-full flex-row items-center justify-between px-4`}>
      {/* Left Back Button (optional) */}
      {showBackPress && (
        <Pressable
          onPress={onBackPress || router.back}
          className="h-10 w-10 items-center justify-center rounded-full border border-secondary/50 bg-secondary">
          <Feather name="chevron-left" size={20} color="#ffffff" />
        </Pressable>
      )}

      {/* Title */}
      <Text className="font-raleway-600 text-2xl font-semibold capitalize leading-[27.6px] text-black">
        {title}
      </Text>

      {/* Right Actions */}
      {showCart && (
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={() => router.push('/products/cart')}
            className="relative h-14 w-14 items-center justify-center rounded-full bg-gray-100">
            <Image
              source={require('@/assets/images/icons/bag-icon.png')}
              className="h-8 w-8 object-center"
              alt="Cart icon"
            />
            <View className="absolute bottom-0 right-0 h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
              <Text className="font-raleway-600 text-sm font-semibold text-white">
                {cartList.length}
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CustomHeading;
