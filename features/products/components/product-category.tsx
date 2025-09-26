import { Pressable, Text } from 'react-native';

const ProductCategory = ({
  category,
  selectedCategory,
  onPressAction,
}: {
  selectedCategory: string;
  category: string;
  onPressAction: (cat: string) => void;
}) => {
  const active = selectedCategory === category;
  return (
    <Pressable
      onPress={() => onPressAction(category)}
      className={`${active ? 'bg-primary' : 'bg-secondary'} h-10 min-w-[100px] items-center justify-center rounded-[29px] px-4`}>
      <Text className="font-raleway-500 text-sm font-medium capitalize tracking-normal text-white">
        {category}
      </Text>
    </Pressable>
  );
};

export default ProductCategory;
