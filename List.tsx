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



const List = () => {

  return (
    <SafeAreaView style={styles.container}>
        
        <Text>test</Text>
      
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

export default List;
