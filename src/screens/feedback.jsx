import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const FeedBack = () => {
  const navigation = useNavigation();
  const [cactive, setCActive] = useState(false);
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    setModalVisible(false);
    setTimeout(() => {
        navigation.navigate("tab");
    }, 3000)
  };
  const dietselect = (item) => {
    setCActive(item.id);
    setInput(item.label);
    setDisabled(false);
  };
  return (
    <SafeAreaView className="bg-[#F6F0FF] flex-1 p-[20px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("tab")}>
          <Text className="text-primary font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-[5%] grow">
        <Text className="text-black text-[30px] font-medium">
        How was your overall experience?
        </Text>
        <Text className="font-regular text-[16px] mt-[15px]">
        It will help us to serve you better.
        </Text>
        <View className="mt-[8%]   ">
         <Text className="text-[20px] font-tbold">What's wrong?</Text>
         <View className="flex flex-wrap pt-[5%] flex-row  gap-4">
                {complaints.map((v) => {
                  return (
                    <TouchableOpacity
                      onPress={() => dietselect(v)}
                      className={`px-[20px] py-[5px] font-regular  flex justify-center items-center rounded-full ${
                        cactive === v.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 border text-black"
                      }`}
                      key={v.id}
                    >
                      <Text
                        className={`${
                            cactive === v.id ? " text-white" : " text-black"
                        } font-regular `}
                      >
                        {v.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
        </View>
        <View className="mt-[10%] flex-col space-y-[30px]">
          <TextInput
          className="h-[200px] border-[2px] p-[10px] font-regular  text-start rounded-[10px] bg-white"
          multiline
          numberOfLines={5}
          placeholder="How can we do better?"
          />

        </View>

        <View className="justify-end grow mt-[15%]">
          <TouchableOpacity
                      onPress={() => setModalVisible(true)}

          className="flex-row justify-center items-center h-[60px] bg-primary  rounded-[10px]">
            <Text className="text-white text-[20px] font-medium">Submit feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}
      >
        <View className="bg-white h-[30%] rounded-[10px] p-[10px] flex-col items-center justify-center">
          <Ionicons name="checkmark-circle-sharp" size={100} color="#8A47EB" />
          <Text className="font-medium">
           We've received your feedback.
          </Text>
          <TouchableOpacity
            onPress={handleConfirm}
            className="bg-primary h-[50px] w-full items-center justify-center rounded-[10px] mt-[40px]"
          >
            <Text className="text-white font-medium">Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FeedBack;


const complaints = [
    {
      id: 0,
      label: "Application Bugs",
    },
    {
      id: 1,
      label: " Customer Service",
    },
    {
      id: 2,
      label: "Slow Loading",
    },
    {
      id: 3,
      label: "Bad Navigation",
    },
    {
      id: 4,
      label: "Weak Functionality",
    },
    {
      id: 5,
      label: "Other Problems",
    }
  ];
