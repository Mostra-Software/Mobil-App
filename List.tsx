import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as WebSockets from 'react-native-websocket';

const List = (navigation) => {

  const [text, setText] = useState('');
  const [customUrl, setCustomUrl] = useState('http://10.10.24.123:5000/postCoordinates/');


/*    const sendCoordinates = async (buttonText) => {
    try {
      const url = 'wss://monkfish-app-v6db8.ondigitalocean.app/'
      const response = await fetch(customUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
          coordinates: buttonText + ' ' + text,
        }),
      });

      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  }  */

  const [socket, setSocket] = useState(null);

  const startUrl2 = 'wss://whale-app-pnnfr.ondigitalocean.app/';

  const redlight = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'redlight ' + text); 
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      setSocket(newSocket);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  };

  const greenLight = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'greenlight ' + text); 
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      setSocket(newSocket);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  };
  const coordinates = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'coordinates ' + text); 
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      setSocket(newSocket);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  };
  const yolblok = async () => {
    try {
      const newSocket = new WebSocket(startUrl2);
      newSocket.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu:', startUrl2);
        sendMessage(newSocket, 'yolblok ' + text); 
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
{/*       <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Custom URL"
        placeholderTextColor="black"
        onChangeText={(inputText) => setCustomUrl(inputText)}
        value={customUrl}
      />
      <View style={{ height: 10 }} /> */}
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Coordinate Expected"
        placeholderTextColor="black"
        onChangeText={(inputText) => setText(inputText)}
        value={text}
      />
      <View style={{ height: 10 }} />
      <TouchableOpacity
        style={styles.sendCoordinatesButton}
        onPress={coordinates}
      >
        <Text style={styles.buttonText}>Send Coordinates</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.redLightButton}
        onPress={redlight}
      >
        <Text style={styles.buttonText}> Red Light</Text>
      </TouchableOpacity>
        <View style={{ height: 3 }} />
        <TouchableOpacity
          style={styles.greenLightButton}
          onPress={greenLight}
        >
          <Text style={styles.buttonText}>Green Light</Text>
        </TouchableOpacity>
        <View style={{ height: 3 }} />
        <TouchableOpacity
          style={styles.yolBlokButton}
          onPress={yolblok}
        >
          <Text style={styles.buttonText}>Yol Blok</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  redLightButton: {
    height: 50,
    width: 400,
    backgroundColor: 'red',
    borderRadius: 0,
    justifyContent: 'center'
  },
  sendCoordinatesButton: {
    height: 30,
    width: 400,
    backgroundColor: 'green',
    borderRadius: 0,
    justifyContent: 'center'
  },
  greenLightButton: {
    height: 50,
    width: 400,
    backgroundColor: 'green',
    borderRadius: 0,
    justifyContent: 'center'
  },
  yolBlokButton: {
    height: 50,
    width: 400,
    backgroundColor: 'blue',
    borderRadius: 0,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default List;
