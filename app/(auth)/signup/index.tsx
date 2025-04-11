import { COLORS } from "@/constants/colors";
import { icons } from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Handle signUp logic here
    console.log("SignUp attempted with:", { email, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 justify-center px-6">
        {/* Header */}
        <View className="items-center mb-12">
          <Image
            source={icons.logo}
            className="w-32 h-32"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-bold mt-4">
            Welcome to Movie flick!
          </Text>
          <Text className="text-gray-300">Sign up to continue</Text>
        </View>

        {/* Form */}
        <View className="space-y-4">
          {/* Username Input */}
          <View className="space-y-2">
            <Text className="text-light-200">Username</Text>
            <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3 gap-2">
              <Ionicons
                name="person-outline"
                size={20}
                color={COLORS.light[200]}
              />
              <TextInput
                className="flex-1 text-white"
                placeholderTextColor={COLORS.light[200]}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>
          </View>
          {/* Email Input */}
          <View className="space-y-2">
            <Text className="text-light-200">Email</Text>
            <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3 gap-2">
              <Ionicons
                name="mail-outline"
                size={20}
                color={COLORS.light[200]}
              />
              <TextInput
                className="flex-1 text-white"
                placeholderTextColor={COLORS.light[200]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="space-y-10">
            <Text className="text-light-200">Password</Text>
            <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3 gap-2">
              <Ionicons
                name="key-outline"
                size={20}
                color={COLORS.light[200]}
              />
              <TextInput
                className="flex-1 text-white"
                placeholderTextColor={COLORS.light[200]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Ionicons
                    name="eye-outline"
                    size={20}
                    color={COLORS.light[200]}
                  />
                ) : (
                  <Ionicons
                    name="eye-off-outline"
                    size={20}
                    color={COLORS.light[200]}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* SignUp Button */}
          <TouchableOpacity
            className="bg-light-200 rounded-lg py-4 items-center mt-6"
            onPress={handleSignUp}
          >
            <Text className="text-primary font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-300">Already have an account? </Text>
            <TouchableOpacity>
              <Link href={"/signin"} className="text-light-200 font-bold">
                Sign In
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signUp;
