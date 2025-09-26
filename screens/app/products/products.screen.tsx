import { Container } from '@/components/container';
import CustomHeading from '@/components/custom-heading';
import { products } from '@/constants/data';
import ProductCategory from '@/features/products/components/product-category';
import ProductItem from '@/features/products/components/product-item';
import { getPriceRange } from '@/utils/getPriceRange';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { FlatList, Image, Platform, Pressable, Text, View } from 'react-native';
import { SheetManager } from "react-native-actions-sheet";

const ProductListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { min, max } = useMemo(() => getPriceRange(products), []);
 const [priceRange, setPriceRange] = useState<[number, number]>([min, max]);
  // Filtered products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All' || !selectedCategory) {
      return products;
    }
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Unique categories + "All"
  const categories = useMemo(() => ['All', ...new Set(products.map((item) => item.category))], []);
  return (
    <Container>
      <StatusBar
        style="auto"
        translucent={Platform.OS === 'android'}
        backgroundColor={Platform.OS === 'android' ? 'rgba(0,0,0,0)' : ''}
      />

      <Stack.Screen options={{ headerShown: false }} />
      <CustomHeading title="Products" showCart />
      <View className="mt-4 h-full flex-col items-start justify-start gap-6 px-4 bg-gray">
        <View className="w-full flex-row items-start justify-start">
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName='gap-2'
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
              <Pressable 
              onPress={() =>
               SheetManager.show("filter-sheet", {
               payload: {
              categories,
              selectedCategory,
              onCategoryChange: setSelectedCategory,
              priceRange,
              onPriceChange: setPriceRange,
            },
          })
  }
           className="w-full flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <Image
                    source={require('@/assets/images/icons/filter-icon.png')}
                    className="h-6 w-6 object-center"
                    alt="Filter icon"
                  />
                  <Text className="text-sm font-normal tracking-normal text-black">Filter</Text>
                </View>
              </Pressable>
            )}
            renderItem={({ item }) => <ProductItem data={item} />}
          />
        </View>
      </View>
    </Container>
  );
};

export default ProductListScreen;
