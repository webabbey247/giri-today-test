import { setWidth } from '@/helper/config';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

interface filterSheetProps {
 payload: {
     priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
 }
}

export default function FilterSheet(props: filterSheetProps) {
    const {  priceRange, onPriceChange } = props.payload 
  // Local state for real-time updates
  const [localRange, setLocalRange] = useState<[number, number]>(priceRange);

    useEffect(() => {
  setLocalRange(priceRange);
    }, [priceRange])
  return (
    <ActionSheet
      id="filter-sheet"
      gestureEnabled={true}
      closable={true}
      initialSnapIndex={0}
      snapPoints={[100]}
      containerStyle={{ paddingHorizontal: 16 }}>
      <View className="w-full gap-4 p-4">
        {/* Price Range */}
        <View className="w-full flex-col gap-4">
          <Text className="font-raleway-600 text-lg font-semibold text-black">Price Range</Text>
          <Text className="text-base font-medium font-raleway-500 text-black">
            ${localRange[0].toFixed()} - ${localRange[1].toFixed()}
          </Text>

          <MultiSlider
            values={priceRange}
            min={priceRange[0]}
            max={priceRange[1]}
            step={1}
            onValuesChange={(values) => setLocalRange(values as [number, number])}
            onValuesChangeFinish={(values) => onPriceChange(values as [number, number])}
            trackStyle={{ height: 6, borderRadius: 3 }}
            sliderLength={setWidth(100) - 56}
            selectedStyle={{ backgroundColor: '#020644' }}
            markerStyle={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: '#020644',
            }}
          />
        </View>
      </View>
    </ActionSheet>
  );
}
