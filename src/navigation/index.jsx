import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from '../screens/login';
import Onboarding from '../screens/onboarding';
import Base from '../screens/base';
import Meal from '../screens/meal';
import Settings from '../screens/settings';
import Final from '../screens/final';
import Notification from '../screens/notification';
import FeedBack from '../screens/feedback';


const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='onboarding' component={Onboarding} />
        <Stack.Screen name='notification' component={Notification} />
        <Stack.Screen name='feedback' component={FeedBack} />
        <Stack.Screen name='tab' component={Base} />
        <Stack.Screen name='meal' component={Meal} />
        <Stack.Screen name='settings' component={Settings} />
        <Stack.Screen name='final' component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route