import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex bg-primary p-[30px]">
      <View className="h-full  justify-end space-y-[20px]">
        <TouchableOpacity
          onPress={() => navigation.navigate("onboarding")}
          className="h-[50px] w-full items-center justify-center bg-black rounded-[5px]"
        >
          <Text className="text-white text-[16px] font-tbold">Sign up with email</Text>
        </TouchableOpacity>
        <Text className="text-center font-regular">or use social signup</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("onboarding")}
          className="h-[50px] w-full items-center justify-center bg-white rounded-[5px]"
        >
          <Text className="text-black text-[16px] font-tbold">Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("onboarding")}
          className="h-[50px] w-full items-center justify-center bg-white rounded-[5px]"
        >
          <Text className="text-black text-[16px] font-tbold">Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("onboarding")}
          className="h-[50px] w-full items-center justify-center bg-white rounded-[5px]"
        >
          <Text className="text-black text-[16px] font-tbold">Continue with Apple</Text>
        </TouchableOpacity>
        <Text className="text-center font-regular text-white text-[18px]">
          Already have an account? <Text className="underline">Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
