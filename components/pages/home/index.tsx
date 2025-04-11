import Navbar from "@/components/shared/Navbar";
import { COLORS } from "@/constants/colors";
import useFetch from "@/hooks/useFetch";
import { fetchAllImages } from "@/services/images";
import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "./ImageCard";

const Home = () => {
  const { data, loading, error } = useFetch(fetchAllImages, true);
  return (
    <SafeAreaView className="flex-1 bg-primary px-4">
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
