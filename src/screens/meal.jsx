import { View, Text, Image, TouchableOpacity } from "react-native";
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

const Meal = () => {
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
            <Ionicons name="reload" size={24} color="black" />
            <Text className="grow items-center text-center font-medium text-[25px] ml-[-5%]">
              Ramen
            </Text>
          </View>
          <Text className="font-regular text-center text-gray-500">
            Lunch / 15 mins
          </Text>
          <View className="bg-gray-300 py-[10px] mt-[20px] flex-row items-center justify-center space-x-[50px]">
            <View className="flex-col items-center">
              <Text className="font-regular">100k</Text>
              <Text className="font-medium">Energy</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="font-regular">15g</Text>
              <Text className="font-medium">Protein</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="font-regular">58g</Text>
              <Text className="font-medium">Carbs</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="font-regular">20g</Text>
              <Text className="font-medium">Fat</Text>
            </View>
          </View>

          <View className="p-[20px] flex-col justify-between grow">
            <View className="space-y-[10px]">
              <View className="flex-row justify-between">
                <Text className="font-medium text-[16px]">Ingredients</Text>
                <View className="flex-row">
                  <View className="h-[30px] w-[40px] border"></View>
                  <View className="h-[30px] w-[40px] border"></View>
                </View>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-regular text-[14px]">
                  Chicken breasts
                </Text>
                <Text className="font-regular text-[14px]">250g</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-regular text-[14px]">
                  Unsalted butter
                </Text>
                <Text className="font-regular text-[14px]">1 tbsp</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-regular text-[14px]">
                  Sesame or vegetable oil
                </Text>
                <Text className="font-regular text-[14px]">2 tsp</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-regular text-[14px]">
                  Fresh ginger
                </Text>
                <Text className="font-regular text-[14px]">2 tsp</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-regular text-[14px]">
                  Large eggs
                </Text>
                <Text className="font-regular text-[14px]">100g</Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("final")} className="bg-primary h-[50px] items-center justify-center rounded-[10px]">
              <Text className="font-medium text-white">Start Cooking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Meal;
