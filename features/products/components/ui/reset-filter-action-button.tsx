import { ResetFilterActionButtonProps } from '@/utils/types';
import { Image, Pressable, Text, View } from 'react-native';

const ResetFilterActionButton = ({ onPressAction, min, max }: ResetFilterActionButtonProps) => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Pressable onPress={onPressAction} className="flex-row items-center gap-2">
        <Image
          source={require('@/assets/images/icons/cancel-circle-icon.png')}
          className="h-6 w-6 object-center"
          alt="reset icon"
        />
        <Text className="font-raleway-500 text-sm font-medium tracking-normal text-black">
          Clear Filter
        </Text>
      </Pressable>
      <View className="flex-row items-start justify-start">
        <Text className="font-raleway-500 text-base font-medium tracking-normal text-black">
          Filter Prices:{' '}
        </Text>
        <Text className="font-raleway-500 text-base font-medium  tracking-normal text-black">
          ${min} - ${max}
        </Text>
      </View>
    </View>
  );
};

export default ResetFilterActionButton;
