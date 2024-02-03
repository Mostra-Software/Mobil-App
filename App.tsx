/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



const App = ({navigation}) => {

  const navigateToCommandPage = () => {
    navigation.navigate('Commands')
  }

  const Start = async () => {  
    try {
      const url = `http://161.9.98.139:5000/postStart/`; //lokal pc ipsi
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  }
  const Stop = async () => {  
    try {
      const url = `http://161.9.98.139:5000/postStop/`; //lokal pc ipsi
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.cameraContainer}>
        <Text style={{alignSelf:'center'}}>Camera</Text>
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button1} onPress={Start}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={Stop}>
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={navigateToCommandPage}>
          <Text style={styles.buttonText}>CMND LIST</Text>
        </TouchableOpacity>




      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex:1
  },
  cameraContainer:{
    backgroundColor:'lightgray',
    width: Dimensions.get('screen').width/1.2,
    height: Dimensions.get('screen').height/2,
    alignSelf:'center',
    marginTop:30,
    borderRadius:30,
    justifyContent:'center',
    borderWidth:2
  },
  buttonContainer:{
    marginTop:80,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },

  button1:{
     height:80,
     width:80,
     backgroundColor:'green',
     borderRadius:10,
     justifyContent:'center'
  },

  button2:{
    height:80,
    width:80,
    backgroundColor:'red',
    borderRadius:10,
    justifyContent:'center',
  },

  button3:{
    height:80,
    width:80,
    backgroundColor:'black',
    borderRadius:10,
    justifyContent:'center'
  },

  buttonText:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  }
  
});

export default App;