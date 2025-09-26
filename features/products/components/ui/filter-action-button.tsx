import { Image, Pressable, Text, View } from 'react-native';

const FilterActionButton = ({ onPressAction }: { onPressAction: () => void }) => {
  return (
    <Pressable onPress={onPressAction} className="w-full flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <Image
          source={require('@/assets/images/icons/filter-icon.png')}
          className="h-6 w-6 object-center"
          alt="Filter icon"
        />
        <Text className="font-raleway-500 text-sm font-medium tracking-normal text-black">
          Filter
        </Text>
      </View>
    </Pressable>
  );
};

export default FilterActionButton;
