import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Home" 
        screenOptions = {{headerShown:false}}>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "Meteor" component = {MeteorScreen}/>  
          <Stack.Screen name = "IssLocation" component = {IssLocationScreen}/>    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;