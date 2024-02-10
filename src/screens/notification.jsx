import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const Notification = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleConfirm = () => {
    setModalVisible(false);
    setTimeout(() => {
        navigation.navigate("feedback");
    }, 3000)
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

      <View className="mt-[5%] grow">
        <Text className="text-primary text-[30px] font-medium">
          Do you want to turn on notifications?
        </Text>
        <View className="mt-[10%] border-[2px] p-[20px_15px] rounded-[10px] bg-white">
          <View className="flex-row justify-between">
            <View className="h-[20px] rounded-[5px] w-[20px] items-center justify-center bg-black">
              <View className="h-[15px] w-[15px] rounded-full bg-primary "></View>
            </View>
            <Text className="text-[#979797] font-regular">now</Text>
          </View>
          <Text className="mt-[2%] font-tbold text-[18px]">
            Notification Title
          </Text>
          <Text className="text-[15px] font-regular">
            Notification text would be placed right here. This is where
            notification text would be placed.
          </Text>
        </View>
        <View className="mt-[15%] flex-col space-y-[30px]">
          <View className="flex-row justify-start items-center px-[10px] border-primary pb-[15px] border-b space-x-[20px]">
            <FontAwesome6 name="check" size={24} color="black" />
            <Text className="text-[20px] font-medium text-primary">
              New daily meal reminder
            </Text>
          </View>
          <View className="flex-row justify-start items-center px-[10px] border-primary pb-[15px] border-b space-x-[20px]">
            <FontAwesome6 name="check" size={24} color="black" />
            <Text className="text-[20px] font-medium text-primary">
              Motivational messages
            </Text>
          </View>
          <View className="flex-row justify-start items-center px-[10px] border-primary pb-[15px] border-b space-x-[20px]">
            <FontAwesome6 name="check" size={24} color="black" />
            <Text className="text-[20px] font-medium text-primary">
              Personalized guideline{" "}
            </Text>
          </View>
        </View>

        <View className="justify-end grow">
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="flex-row justify-center items-center h-[60px] bg-primary  rounded-[10px]"
          >
            <Text className="text-white text-[20px] font-medium">Enable</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisible}
      animationOut={"fadeOut"}
      >
        <View className="bg-white h-[30%] rounded-[10px] p-[10px] flex-col items-center justify-center">
          <Ionicons name="checkmark-circle-sharp" size={100} color="#8A47EB" />
          <Text className="font-medium">
            Notifications have been turned on.
          </Text>
          <TouchableOpacity
            onPress={handleConfirm}
            className="bg-primary h-[50px] w-full items-center justify-center rounded-[10px] mt-[40px]"
          >
            <Text className="text-white font-medium">Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Notification;
