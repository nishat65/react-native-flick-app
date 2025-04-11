import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function ImageCard({ image }: { image: IPixabayImage }) {
  return (
    <View className="rounded-lg h-[500px] p-2 mb-4 bg-dark-100">
      <View className="p-2 flex-1">
        <Image
          source={{ uri: image.webformatURL }}
          className="w-full h-full rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View className="flex-row items-center justify-start gap-2 px-2">
        <View className="size-10 rounded-full overflow-hidden">
          <Image
            source={{ uri: image.userImageURL }}
            className="w-full h-full rounded-lg"
            resizeMode="contain"
          />
        </View>
        <Text className="text-light-200 font-bold">{image.user}</Text>
      </View>
      <View className="flex-row items-center justify-start gap-4 px-2 mt-2 flex-wrap">
        <View className="flex-row items-center gap-2">
          <Ionicons
            name="chatbubbles-outline"
            size={24}
            color={COLORS.accent}
          />
          <Text className="text-light-200 font-bold">{image.comments}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Ionicons name="heart-outline" size={24} color={COLORS.accent} />
          <Text className="text-light-200 font-bold">{image.likes}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Ionicons name="download-outline" size={24} color={COLORS.accent} />
          <Text className="text-light-200 font-bold">{image.downloads}</Text>
        </View>
      </View>
    </View>
  );
}
