import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import user from "../../assets/user.png";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white  w-full relative">
      <View className="flex-row items-center justify-between p-[20px]">
        <View className="h-[50px] w-[50px] rounded-full  flex items-center overflow-hidden ">
          <Image source={user} className="object-contain" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <FontAwesome6 name="bars" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View className="absolute p-[10px_15px] space-x-[10px] bottom-0  flex-row items-center justify-between w-full">
        <TouchableOpacity>
          <FontAwesome6 name="camera" size={25} color="gray" />
        </TouchableOpacity>
        <TextInput
        multiline
          placeholder="Message..."
          className="border-[2px] border-[#C8C8CC] font-regular w-[80%]  rounded-full h-[50px] px-[10px]"
        />
        <TouchableOpacity className="">
          <FontAwesome6 name="paper-plane" size={25} color="gray" />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
