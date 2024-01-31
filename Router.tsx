import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import App from './App';
import List from './List';



const Stack = createNativeStackNavigator();


const Router = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:true}}>
          <Stack.Screen name = "Mostra" component={App} />
          <Stack.Screen name = "Commands" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Router;