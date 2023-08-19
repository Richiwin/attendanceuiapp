/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/Login';
import Splash from './Components/Splash';
import PunchIn from './Components/PunchIn';
import Attendance from './Components/Attendance';
import {StyleSheet, View} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'login page',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              flex: 1,
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen name="attendance" component={Attendance} />
        {/* 
<Stack.Screen name="punchin" component={PunchIn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
