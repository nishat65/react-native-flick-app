import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="px-6 py-2">
        <Text className="text-white">profile page</Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;
