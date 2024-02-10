import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ProgressChart, LineChart, BarChart } from "react-native-chart-kit";
import fire from "../../assets/calory.png";
import user1 from "../../assets/user1.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";


const Settings = () => {
  const data = {
    data: [0.2],
  };

  const data1 = {
    data: [0.6],
  };

  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Weight Changes"], // optional
  };
  return (
    <SafeAreaView className="flex-1 p-[20px]">
      <View className="flex-row justify-between">
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text className="text-blue font-tbold">Settings</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-[20px]">
        <View className="mt-[20px] border rounded-[10px] p-[15px]">
          <View className="flex-row items-center justify-between">
            <Text className="text-[18px] font-tbold">Weekly Progress</Text>
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
        <View className="mt-[20px] border rounded-[10px] p-[15px]">
          <View className="flex-row items-center justify-between">
            <Text className="text-[18px] font-tbold">Weight</Text>
            <Text className="text-gray-400 text-[12px] font-tbold">9:38am</Text>
          </View>
          <View className="flex-row items-center justify-between mt-[20px]">
            <View>
              <Text className="font-tbold  text-[18px]">72.4 kg</Text>
              <View className="flex-row items-center">
                {/* <Image source={fire} className="h-[20px] w-[20px]" /> */}
                <Text className="font-regular text-[#6D6D6D] text-[12px]  ">
                  21% Fat Mass
                </Text>
              </View>
            </View>
            <View className="flex-row">
              <LineChart
                data={data2}
                width={255}
                height={120}
                verticalLabelRotation={30}
                chartConfig={{
                  background: 0,
                  backgroundGradientFrom: 0,
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: 0,
                  backgroundGradientToOpacity: 0,
                  color: (opacity = 1) => `rgba(53, 133, 254, ${opacity})`,
                }}
                bezier
              />
            </View>
          </View>
          <TouchableOpacity className="flex-row bg-primary h-[50px] w-full justify-center items-center mt-[30px] rounded-[10px]">
            <Text className="text-white font-tbold">Add Weight</Text>
          </TouchableOpacity>
        </View>
        {/* <View className="mt-[20px] border rounded-[10px] p-[15px]">
          <View className="flex-row items-center justify-between">
            <Text className="text-[18px] font-tbold">Calories</Text>
            <Text className="text-gray-400 text-[12px] font-tbold">9:38am</Text>
          </View>
          <View className="flex-row items-center justify-between mt-[20px]">
            <View>
              <Text className="font-tbold  text-[18px]">1,548 cal</Text>
              <View className="flex-row items-center">
                <Text className="font-regular text-[#6D6D6D] text-[12px]  ">
                  89% Goal
                </Text>
              </View>
            </View>
            <View className="flex-row">
              <BarChart
                data={data1}
                width={200}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                  background: 0,
                  backgroundGradientFrom: 0,
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: 0,
                  backgroundGradientToOpacity: 0,
                  color: (opacity = 1) => `rgba(53, 133, 254, ${opacity})`,
                }}
                verticalLabelRotation={30}
              />
            </View>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
