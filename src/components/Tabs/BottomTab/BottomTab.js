import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home/Home';
import Social from '../../../screens/Social/Social';
import Grading from '../../../screens/Grading/Grading';
import Contacts from '../../../screens/Contact/Contact';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        headerTransparent: true,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={require('../../../../assets/icons/home-2.png')} />
            ) : (
              <Image
                source={require('../../../../assets/icons/filledIcons/home-2.png')}
              />
            ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../../../../assets/icons/grading.png')}
              />
            ) : (
              <Image
                source={require('../../../../assets/icons/filledIcons/grading.png')}
              />
            ),
        }}
        name="Grading"
        component={Grading}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={require('../../../../assets/icons/call.png')} />
            ) : (
              <Image
                source={require('../../../../assets/icons/filledIcons/call.png')}
              />
            ),
        }}
        name="Contacts"
        component={Contacts}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../../../../assets/icons/profile-2user.png')}
              />
            ) : (
              <Image
                source={require('../../../../assets/icons/filledIcons/profile-2user.png')}
              />
            ),
        }}
        name="Social"
        component={Social}
      />
    </Tab.Navigator>
  );
}

export default function BottomTab() {
  return <MyTabs />;
}
