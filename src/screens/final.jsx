import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import bowl from "../../assets/pasta.png";
import { StatusBar } from "expo-status-bar";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Final = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 w-full">
      <StatusBar style="auto" backgroundColor="#dfe3e1" />
      <View className="flex-1 flex-col items-center justify-between">
        <View className="h-[40%] bg-[#dfe3e1] w-full  relative">
          <View className="absolute top-0 w-full flex-row p-[20px] z-20 justify-between">
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={30}
              color="black"
            />
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color="black"
            />
          </View>
          <Image source={bowl} className="h-full w-full object-cover" />
        </View>
        <View className="h-[60%]  bg-white rounded-t-[30px] w-full">
          <View className="flex-row items-center justify-between p-[10px]">
            <Text className="grow items-center text-center font-medium text-[25px] ml-[-5%]">
              Final Step
            </Text>
          </View>

          <View className="p-[20px] flex-col space-y-[10px]">
            <View className="flex-row justify-between border-b border-gray-300 pb-[20px]">
              <Text className="font-regular text-[14px]">Bacon</Text>
              <Text className="font-regular text-[14px]">250g</Text>
            </View>
            <View className="flex-row justify-between border-b border-gray-300 pb-[20px]">
              <Text className="font-regular text-[14px]">Soy sauce</Text>
              <Text className="font-regular text-[14px]">200 ml</Text>
            </View>
          </View>

          <View className="p-[20px] flex-col justify-between grow">
            <Text className="text-center font-regular">
              We tie the bacon with twine so that the skin is on the outside and
              one end and the other practically meet. Heat a little oil in a
              pressure cooker and mark the bacon all over until golden brown. We
              remove and discard the oil.
            </Text>

            <View className="flex-row w-full space-x-[5%] justify-between">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-gray-300  w-[40%] h-[50px] items-center justify-center rounded-[10px]"
              >
                <Text className="font-tbold text-[16px] text-black">Previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("tab")}
                className="bg-primary h-[50px] w-[40%] items-center justify-center rounded-[10px]"
              >
                <Text className="font-tbold text-[16px]  text-white">Finisk Cook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Final;
