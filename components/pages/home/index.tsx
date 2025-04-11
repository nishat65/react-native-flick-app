import Navbar from "@/components/shared/Navbar";
import { COLORS } from "@/constants/colors";
import useFetch from "@/hooks/useFetch";
import { fetchAllImages } from "@/services/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ImageCard({ image }: { image: IPixabayImage }) {
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
      <View className="flex-row items-center justify-between gap-4 px-2 mt-2 flex-wrap">
        <View>
          <Ionicons
            name="chatbubbles-outline"
            size={24}
            color={COLORS.accent}
          />
          <Text className="text-light-200 font-bold">
            {image.comments} Comments
          </Text>
        </View>
        <View>
          <Ionicons name="heart-outline" size={24} color={COLORS.accent} />
          <Text className="text-light-200 font-bold">{image.likes} Likes</Text>
        </View>
      </View>
    </View>
  );
}

const Home = () => {
  const { data, loading, error } = useFetch(fetchAllImages, true);
  return (
    <SafeAreaView className="flex-1 bg-primary p-4">
      <Navbar />
      {loading ? (
        <View>
          <ActivityIndicator size="large" color={COLORS.accent} />
        </View>
      ) : (
        <ScrollView
          className="flex-1 py-5"
          showsVerticalScrollIndicator={false}
        >
          {data &&
            data.map((image: IPixabayImage) => (
              <ImageCard key={image.id} image={image} />
            ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
