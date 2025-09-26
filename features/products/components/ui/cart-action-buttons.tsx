import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

interface cartActionButtonProps {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartActionButton = ({ qty, onIncrease, onDecrease }: cartActionButtonProps) => {
  return (
    <View className="w-1/4 flex-row items-center justify-end gap-4">
      <TouchableOpacity
        onPress={onIncrease}
        className="h-8 w-8 items-center justify-center rounded-full bg-gray">
        <Ionicons name="add-outline" size={14} color="black" />
      </TouchableOpacity>

      <Text className="font-raleway-500 font-medium text-base text-black">{qty}</Text>

      <TouchableOpacity
        onPress={onDecrease}
        className="h-8 w-8 items-center justify-center rounded-full bg-gray">
        <Ionicons name="remove-outline" size={14} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CartActionButton;
