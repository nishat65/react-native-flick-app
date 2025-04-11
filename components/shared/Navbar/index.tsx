import { StyleSheet, Image, View } from "react-native";
import { icons } from "@/constants/icons";
import React from "react";

const Navbar = () => {
  return (
    <View className="mb-5">
      <Image source={icons.logo} className="w-10 h-10" resizeMode="contain" />
    </View>
  );
};

export default Navbar;
