import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import user from "../../assets/user.png";
import user1 from "../../assets/user1.png";
import meal3 from "../../assets/meal3.png";
import meal4 from "../../assets/meal4.png";
import fire from "../../assets/calory.png";
import { ProgressChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  const navigation = useNavigation();

  const data = {
    data: [0.2],
  };

  const data1 = {
    data: [0.6],
  };
  return (
    <SafeAreaView className="flex-1 bg-white p-[20px]">
      <View className="flex-row items-center justify-between">
        <View className="h-[50px] w-[50px] rounded-full  flex items-center overflow-hidden ">
          <Image source={user} className="object-contain" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <Ionicons name="settings" size={28} color="black" /> 
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-[40px]">
        <View className="border rounded-[10px] p-[15px]">
          <View className="flex-row items-center justify-between">
            <Text className="text-[18px] font-tbold">Today's Progress</Text>
            <Text className="text-blue font-tbold">View More</Text>
          </View>
          <View className="flex-row items-center justify-between mt-[20px]">
            <View>
              <Text className="font-regular text-[#6D6D6D]">Calories</Text>
              <View className="flex-row items-center">
                <Image source={fire} className="h-[20px] w-[20px]" />
                <Text className="font-medium text-black text-[18px]">
                  1,284
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-[5%]">
              <ProgressChart
                data={data}
                width={80}
                height={80}
                strokeWidth={10}
                radius={25}
                chartConfig={{
                  background: 0,
                  backgroundGradientFrom: 0,
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: 0,
                  backgroundGradientToOpacity: 0,
                  color: (opacity = 1) => `rgba(254, 198, 53, ${opacity})`,
                }}
                hideLegend={true}
              />
              <ProgressChart
                data={data1}
                width={80}
                height={80}
                strokeWidth={10}
                radius={25}
                chartConfig={{
                  background: 0,
                  backgroundGradientFrom: 0,
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: 0,
                  backgroundGradientToOpacity: 0,
                  color: (opacity = 1) => `rgba(53, 133, 254, ${opacity})`,
                }}
                hideLegend={true}
              />
              <ProgressChart
                data={data1}
                width={80}
                height={80}
                strokeWidth={10}
                radius={25}
                chartConfig={{
                  background: 0,
                  backgroundGradientFrom: 0,
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: 0,
                  backgroundGradientToOpacity: 0,
                  color: (opacity = 1) => `rgba(120, 118, 245, ${opacity})`,
                }}
                hideLegend={true}
              />
            </View>
          </View>
          <View className="flex-row justify-between items-center mt-[10px]">
            <View className="h-[30px] w-[30px] rounded-full  flex items-center overflow-hidden ">
              <Image source={user1} className="object-contain" />
            </View>
            <View className="p-[8px_18px] rounded-full bg-[#F3F3F3]">
              <Text className="font-regular">
                🎉 Keep the pace! You’re doing great.
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-[30px] flex-col space-y-[10px]">
          <TouchableOpacity onPress={() => navigation.navigate("meal")}>
            <Image
              className="h-[200px] rounded-[10px] object-cover w-full"
              source={meal3}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("meal")}>
            <Image
              className="h-[200px] rounded-[10px] object-cover w-full"
              source={meal4}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("meal")}>
            <Image
              className="h-[200px] rounded-[10px] object-cover w-full"
              source={meal3}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
