import { Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

type FilterSheetProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
};

export default function FilterSheet(props: FilterSheetProps
) {
 const { categories, selectedCategory, onCategoryChange, priceRange, onPriceChange } = props;

  return (
    <ActionSheet
      id="filter-sheet"
      gestureEnabled={true}
      initialSnapIndex={0}
      snapPoints={[50, 80, 100]}
      containerStyle={{ padding: 16 }}>
      <View className="gap-4 p-4">
        {/* Categories */}
        <Text className="text-lg font-bold text-black">Categories</Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="flex-row flex-wrap gap-2">
            {[...categories].map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => onCategoryChange(cat)}
                className={`${ selectedCategory === cat ? 'bg-primary' : 'bg-secondary'} h-10 min-w-[100px] items-center justify-center rounded-[29px] px-4`}>
                <Text className="font-raleway-500 text-sm font-medium capitalize tracking-normal text-white">
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Range */}
        <Text className="mt-4 text-lg font-bold text-black">Price Range</Text>
        <Text className="text-sm text-gray-600">${priceRange[0]} - ${priceRange[1]}</Text>
        {/* <Slider
          minimumValue={0}
          maximumValue={1000}i
          step={10}
            value={priceRange[1]}
            onValueChange={(val) => onPriceChange([priceRange[0], val])}
          minimumTrackTintColor="#FF6B00"
          maximumTrackTintColor="#ccc"
        /> */}
      </View>
      <TouchableOpacity className="h-[52px] w-full items-center justify-center rounded-lg bg-secondary">
        <Text className="text-base font-semibold text-white">Apply Filters</Text>
      </TouchableOpacity>
    </ActionSheet>
  );
}
