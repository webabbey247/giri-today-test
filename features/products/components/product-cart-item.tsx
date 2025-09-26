import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeFromCart, updateCartQty } from '../redux/cartSlice';

import { CartItem } from '@/utils/types';
import CartActionButton from './ui/cart-action-buttons';


const ProductCartItem = ({ item }: {item: CartItem}) => {
  const dispatch = useDispatch();

  // Increase qty
  const handleIncrease = () => {
    dispatch(updateCartQty({ id: item.id, qty: item.qty + 1 }));
  };

  // Decrease qty (prevent going below 1)
  const handleDecrease = () => {
    if (item.qty > 1) {
      dispatch(updateCartQty({ id: item.id, qty: item.qty - 1 }));
    }
  };

  // Remove item from cart
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <View
      key={item.id}
      className="w-full flex-row items-start justify-start gap-4 rounded-[10px] border border-gray px-2 py-2">
      {/* Product Image */}
      <Image
        source={{ uri: item.image }}
        className="h-[79px] w-[83px] rounded-[10px] object-contain"
      />

      {/* Product Info */}
      <View className="w-3/4 flex-col items-start justify-start gap-[18px]">
        <View className="w-full flex-row items-start justify-between">
          <View className="flex-col gap-1">
            <Text className="line-clamp-2 max-w-60 font-raleway-600 text-base font-semibold text-black">
              {item.name}
            </Text>
            <Text className="font-raleway-400 text-base font-normal capitalize text-gray-400">
              {item.category}
            </Text>
          </View>

          {/* Delete Button */}
          <TouchableOpacity onPress={handleRemove} className="p-1">
            <Ionicons name="trash-outline" size={16} color="red" />
          </TouchableOpacity>
        </View>

        {/* Price */}
        <View className="w-full flex-row items-center justify-between">
          <Text className="font-rebond-600 text-sm font-semibold text-black">
            ${item.price?.toFixed(2)}
          </Text>

          {/* Quantity Controls */}
          <CartActionButton
            qty={item.qty}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCartItem;
