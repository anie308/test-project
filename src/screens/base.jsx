import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import MealPlan from "./plan";
import GroceryList from "./grocery";
import Chat from "./chat";

const Tab = createBottomTabNavigator();

const Base = () => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            fontFamily: "medium",
            fontSize: 12,
            color: "black",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo
                name="light-up"
                size={20}
                color="black"
                style={{ marginTop: 7 }}
              />
            ) : (
              <Entypo
                name="light-up"
                size={20}
                color="black"
                style={{ marginTop: 7 }}
              />
            ),
        }}
        name="Today"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            fontFamily: "medium",
            fontSize: 12,
            color: "black",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ) : (
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ),
        }}
        name="Meal Plan"
        component={MealPlan}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            fontFamily: "medium",
            fontSize: 12,
            color: "black",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo
                name="shopping-basket"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ) : (
              <Entypo
                name="shopping-basket"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ),
        }}
        name="Grocery List"
        component={GroceryList}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            fontFamily: "medium",
            fontSize: 12,
            color: "black",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
                style={{ marginTop: 7 }}
              />
            ),
        }}
        name="Chat"
        component={Chat}
      />
    </Tab.Navigator>
  );
};

export default Base;
