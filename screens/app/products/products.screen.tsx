import { Container } from '@/components/container';
import CustomHeading from '@/components/custom-heading';
import { products } from '@/constants/data';
import ProductCategory from '@/features/products/components/product-category';
import ProductItem from '@/features/products/components/product-item';
import FilterActionButton from '@/features/products/components/ui/filter-action-button';
import ResetFilterActionButton from '@/features/products/components/ui/reset-filter-action-button';
import { getPriceRange } from '@/utils/getPriceRange';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { FlatList, Image, Platform, Text, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';

const ProductListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { min, max } = useMemo(() => getPriceRange(products), []);
  const [priceRange, setPriceRange] = useState<[number, number]>([min, max]);
  const [filter, setFilter] = useState<boolean>(false);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const inCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return inCategory && inPrice;
    });
  }, [selectedCategory, priceRange]);

  // Unique categories + "All"
  const categories = useMemo(() => ['All', ...new Set(products.map((item) => item.category))], []);

  //display action sheet
  const openFilterPrice = () => {
    setFilter(true);
    SheetManager.show('filter-sheet', {
      payload: {
        priceRange,
        onPriceChange: setPriceRange,
      } as any,
    });
  };

  //reset filter action
  const resetFilterAction = () => {
    setFilter(false);
    setPriceRange([min, max]);
  };

  return (
    <Container>
      <StatusBar
        style="auto"
        translucent={Platform.OS === 'android'}
        backgroundColor={Platform.OS === 'android' ? 'rgba(0,0,0,0)' : ''}
      />

      <Stack.Screen options={{ headerShown: false }} />
      <CustomHeading title="Products" showCart />
      <View className="bg-gray mt-4 h-full flex-col items-start justify-start gap-6 px-4">
        <View className="w-full flex-row items-start justify-start">
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-2"
            renderItem={({ item }) => (
              <ProductCategory
                selectedCategory={selectedCategory}
                category={item}
                onPressAction={setSelectedCategory}
              />
            )}
          />
        </View>
        <View className="w-full flex-row items-start justify-start">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerClassName="gap-4 justify-between pb-20"
            ListHeaderComponent={() => (
              <>
                {filter ? (
                  <ResetFilterActionButton
                    onPressAction={resetFilterAction}
                    min={priceRange[0]}
                    max={priceRange[1]}
                  />
                ) : (
                  <FilterActionButton onPressAction={openFilterPrice} />
                )}
              </>
            )}
            renderItem={({ item }) => <ProductItem data={item} />}
            ListEmptyComponent={() => (
              <View className="mt-[228px] w-full items-center justify-center gap-4 px-4">
                <Image
                  source={require('@/assets/images/icons/box-icon.png')}
                  className="h-16 w-16 object-center"
                  alt="notification icon"
                />
                <View className="flex-col items-center justify-center gap-2 px-[71px]">
                  <Text className="font-rebond-600 text-center text-xl font-semibold text-black">
                    No Products Found!
                  </Text>
                  <Text className="font-common-500 text-center text-base font-medium text-black">
                    When you add products, they’ll appear here.
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default ProductListScreen;
