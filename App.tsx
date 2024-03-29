import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import * as WebSockets from 'react-native-websocket';


const App = ({ navigation }) => {

  const defaultStartUrl = 'http://10.10.24.123:5000/postStart/';
  const defaultStoptUrl = 'http://10.10.24.123:5000/postStop/';
  const [startUrl, setStartUrl] = useState(defaultStartUrl);
  const [stopUrl, setStopUrl] = useState(defaultStoptUrl);

  

  const navigateToCommandPage = () => {
    navigation.navigate('Commands');
  };
/* 
  const handleStart = async () => {
    try {
      
      const response = await fetch(startUrl, {
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
  }; 
  
    const handleStop = async () => {
    try {
      const response = await fetch(stopUrl, {
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
  };
  
  */
 
  const [socket, setSocket] = useState(null);

  const startUrl2 = 'wss://whale-app-pnnfr.ondigitalocean.app/';

  const handleStart = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'start');
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      setSocket(newSocket);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  };
  const handleStop = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'stop');
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      setSocket(newSocket);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  };



  const sendMessage = (socket, message) => {
    if (socket.readyState === WebSocket.OPEN) {
      const messageObj = { message: message };
      const jsonMessage = JSON.stringify(messageObj);
      socket.send(jsonMessage);
      console.log('Mesaj gönderildi:', jsonMessage);
    } else {
      console.error('WebSocket bağlantısı henüz açılmadı.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <Text style={{ alignSelf: 'center' }}>Camera</Text>
      </View>

      <View style={styles.inputContainer}>
{/*         <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Enter Start URL"
          placeholderTextColor="black"
          onChangeText={setStartUrl}
          value={startUrl}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Enter Stop URL"
          placeholderTextColor="black"
          onChangeText={setStopUrl}
          value={stopUrl}
        /> */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleStart}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={handleStop}>
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={navigateToCommandPage}>
          <Text style={styles.buttonText}>CMND LIST</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  cameraContainer: {
    backgroundColor: 'lightgray',
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 2,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth: 2,
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button1: {
    height: 80,
    width: 80,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button2: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button3: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
