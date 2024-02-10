import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import meal1 from "../../assets/meal1.png";
import meal2 from "../../assets/meal2.png";
import { useNavigation } from "@react-navigation/native";
const Onboarding = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [dietinput, setDietInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [dietdisabled, setDietDisabled] = useState(true);
  const [dietactive, setDietActive] = useState(false);
  const [active, setActive] = useState(false);

  
  const next = () => {
   if(current === 2){
     navigation.navigate('notification')
   }else {
    setCurrent((prev) => prev + 1);
   }
  };

  const select = (item) => {
    setActive(item.id);
    setInput(item.label);
    setDisabled(false);
  };
  const dietselect = (item) => {
    setDietActive(item.id);
    setDietInput(item.label);
    setDietDisabled(false);
  };

  const previous = () => {
    setCurrent((prev) => prev - 1);
  };

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <SafeAreaView className="flex-1">
      {current === 0 && (
        <View className="py-[20%] flex-1 ">
          <View className=" overflow-hidden flex-row space-x-[20px]">
            <Image
              source={meal1}
              placeholder={blurhash}
              className="h-[220px] rounded-r-[20px] w-[60%]"
            />
            <Image
              placeholder={blurhash}
              source={meal2}
              className="h-[220px] rounded-l-[20px] "
            />
          </View>
          <View className="grow  flex-col justify-between p-[20px]">
            <View className="mt-[20%] flex-col items-center">
              <Text className="text-center font-tbold text-[30px]">
                Enjoy your lunch time
              </Text>
              <Text className="font-regular text-center text-[20px] mt-[10%] w-[100%] justify-center ">
                Just relax and not overthink what to eat. This is in our side
                with our personalized meal plans just prepared and adapted to
                your needs.
              </Text>
            </View>
            <View className="flex-row  items-center justify-between w-full">
              <View className="flex-row space-x-[5px]">
                <View className="h-[10px] w-[40px] bg-primary rounded-full"></View>
                <View className="h-[10px] w-[10px] bg-gray-300 rounded-full"></View>
                <View className="h-[10px] w-[10px] bg-gray-300 rounded-full"></View>
                <View className="h-[10px] w-[10px] bg-gray-300 rounded-full"></View>
              </View>
              <TouchableOpacity
                onPress={next}
                className="h-[50px] text-center items-center justify-center bg-primary w-[150px] rounded-[10px]"
              >
                <Text className="text-white font-tbold text-[16px]">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {current === 1 && (
        <View className="p-[20px] mt-[5%] flex-1 ">
          <View className="flex-row items-center justify-between">
            <View className="flex-row space-x-[8px]">
              <View className="h-[30px] w-[30px] border rounded-full items-center justify-center">
                <Text className="font-regular">1</Text>
              </View>
              <View
                className={`${
                  current === 1 ? "bg-primary text-white" : " border text-black"
                } "h-[30px] w-[30px]  rounded-full items-center justify-center"`}
              >
                <Text className="font-regular text-center text-white">2</Text>
              </View>
              <View className="h-[30px] w-[30px] border rounded-full items-center justify-center">
                <Text className="font-regular">3</Text>
              </View>
              <View className="h-[30px] w-[30px] border rounded-full items-center justify-center">
                <Text className="font-regular">4</Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('tab')}>
              <Text className="text-primary font-tbold text-[18px]">Skip</Text>
            </TouchableOpacity>
          </View>
          <View className="grow  flex-col justify-between pb-[80px]">
            <View className="mt-[15%] flex-col items-start">
              <Text className="text-start w-[70%] font-tbold text-[30px]">
                Any Ingredient Allergies?
              </Text>
              <Text className="font-regular text-start w-[70%] text-[16px] mt-[5%]  justify-center ">
                To offer you the best tailored diet experience we need to know
                more information about you.
              </Text>
              <View className="flex flex-wrap pt-[8%] flex-row  gap-4">
                {allergy.map((v) => {
                  return (
                    <TouchableOpacity
                      onPress={() => select(v)}
                      className={`px-[20px] py-[5px] font-regular  flex justify-center items-center rounded-full ${
                        active === v.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 border text-black"
                      }`}
                      key={v.id}
                    >
                      <Text
                        className={`${
                          active === v.id ? " text-white" : " text-black"
                        } font-regular `}
                      >
                        {v.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View className="flex-row  items-center justify-between w-full">
              <TouchableOpacity
                onPress={previous}
                className="h-[50px] text-center items-center justify-center bg-gray-200 w-[150px] rounded-[10px]"
              >
                <Text className="text-black font-tbold text-[16px]">
                  Previous
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={next}
                className="h-[50px] text-center items-center justify-center bg-primary w-[150px] rounded-[10px]"
              >
                <Text className="text-white font-tbold text-[16px]">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {current === 2 && (
        <View className="p-[20px] mt-[5%] flex-1 ">
          <View className="flex-row items-center justify-between">
            <View className="flex-row space-x-[8px]">
              <View className="h-[30px] w-[30px] border rounded-full items-center justify-center">
                <Text className="font-regular">1</Text>
              </View>
              <View
                className={`${
                  current === 1 ? "bg-primary text-white" : " border text-black"
                } "h-[30px] w-[30px]  rounded-full items-center justify-center"`}
              >
                <Text className="font-regular text-center text-black">2</Text>
              </View>
              <View
                className={`${
                  current === 2 ? "bg-primary text-white" : " border text-black"
                } "h-[30px] w-[30px]  rounded-full items-center justify-center"`}
              >
                <Text className="font-regular text-white">3</Text>
              </View>
              <View className="h-[30px] w-[30px] border rounded-full items-center justify-center">
                <Text className="font-regular">4</Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('tab')}>
              <Text className="text-primary font-tbold text-[18px]">Skip</Text>
            </TouchableOpacity>
          </View>
          <View className="grow  flex-col justify-between pb-[80px]">
            <View className="mt-[15%] flex-col items-start">
              <Text className="text-start w-[80%] font-tbold text-[30px]">
              Do you follow any of these diets?
              </Text>
              <Text className="font-regular text-start w-[70%] text-[16px] mt-[5%]  justify-center ">
                To offer you the best tailored diet experience we need to know
                more information about you.
              </Text>
              <View className="flex flex-wrap pt-[8%] flex-row  gap-4">
                {diets.map((v) => {
                  return (
                    <TouchableOpacity
                      onPress={() => dietselect(v)}
                      className={`px-[20px] py-[5px] font-regular  flex justify-center items-center rounded-full ${
                        dietactive === v.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 border text-black"
                      }`}
                      key={v.id}
                    >
                      <Text
                        className={`${
                            dietactive === v.id ? " text-white" : " text-black"
                        } font-regular `}
                      >
                        {v.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View className="flex-row  items-center justify-between w-full">
              <TouchableOpacity
                onPress={previous}
                className="h-[50px] text-center items-center justify-center bg-gray-200 w-[150px] rounded-[10px]"
              >
                <Text className="text-black font-tbold text-[16px]">
                  Previous
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={next}
                className="h-[50px] text-center items-center justify-center bg-primary w-[150px] rounded-[10px]"
              >
                <Text className="text-white font-tbold text-[16px]">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const allergy = [
  {
    id: 0,
    label: "Gluten",
  },
  {
    id: 1,
    label: "Diary",
  },
  {
    id: 2,
    label: "Egg",
  },
  {
    id: 3,
    label: "Soy",
  },
  {
    id: 4,
    label: "Peanut",
  },
  {
    id: 5,
    label: "Wheat",
  },
  {
    id: 6,
    label: "Milk",
  },
  {
    id: 7,
    label: "Fish",
  },
];
const diets = [
  {
    id: 0,
    label: "None",
  },
  {
    id: 1,
    label: "Vegan",
  },
  {
    id: 2,
    label: "Paleo",
  },
  {
    id: 3,
    label: "Dukan",
  },
  {
    id: 4,
    label: "Vegetarian",
  },
  {
    id: 5,
    label: "Atkins",
  },
  {
    id: 6,
    label: "Intermittent Fasting",
  },
];
