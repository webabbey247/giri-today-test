import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { productProps } from '@/utils/types';
import { useEffect } from 'react';

const ProductItem = ({ data }: { data: productProps }) => {
  const { push } = useRouter();
  const viewSingleProduct = () => {
    push({
      pathname: '/products/[productId]',
      params: {
        productId: data?.id,
      },
    });
  };

  useEffect(() => {
  Image.prefetch(data?.image);
}, []);
  return (
    <TouchableOpacity
      onPress={viewSingleProduct}
      key={data?.id}
      className="m-2 h-[260px] w-full flex-1 gap-2 rounded-[10px] bg-white">
      <Image
        source={{ uri: data?.image }}
        className="h-[184px] w-full rounded-t-[10px] object-contain object-center"
        alt={data?.title}
      />
      <View className="flex-col px-2">
        <Text className="font-raleway-400 text-xs font-normal text-gray-400 capitalize">{data?.category}</Text>
        <Text className="line-clamp-1 font-raleway-500 text-base font-medium tracking-normal text-black">
          {data?.title}
        </Text>
        <Text className="font-raleway-400 text-base font-normal tracking-normal text-black">
          ${data?.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
