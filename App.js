import React,{useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import WelcomeScreen from './src/screens/initialScreens/WelcomeScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StrtExploring from './src/screens/SplashScreen/StrtExploring';
import Main from './src/screens/Main/Main';
import About from './src/screens/About/About';
import { ThemeProvider } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
// import BottomTab from './src/components/Tabs/BottomTab/BottomTab';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
   <Provider store={store}>
     <View style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="StrtExploring"
            component={StrtExploring}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={Main}
          />
          <Stack.Screen
            options={{headerShown:false}}
            name="About"
            component={About}
          />
        </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </View>
   </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
