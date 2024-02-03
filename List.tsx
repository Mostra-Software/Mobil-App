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

const List = (navigation) => {
  const [text, setText] = useState('');
  const [coordinates, setCoordinates] = useState('');

  const redLight = async () => {
    try {
      const url = `http://161.9.98.139:5000/postredLight/`;

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

  const greenLight = async () => {
    try {
      const url = `http://161.9.98.139:5000/postgreenLight/`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coordinates: coordinates + ' ' + text,
        }),
      });

      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error.message || 'Unknown error');
    }
  }

  const sendCoordinates = async (buttonText) => {
    try {
      const url = `http://161.9.98.139:5000/postCoordinates/`;

      const response = await fetch(url, {
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
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Metin girişi alanı */}
      <TextInput
        style={styles.input}
        placeholder="Koordinat..."
        onChangeText={(inputText) => setText(inputText)}
        value={text}
      />
      <View style={{ height: 10 }} />
      <TouchableOpacity
        style={styles.sendCoordinatesButton}
        onPress={() => sendCoordinates("coordinates")}
      >
        <Text style={styles.buttonText}>Send Coordinates</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.redLightButton}
          onPress={() => sendCoordinates("RedLight")}
        >
          <Text style={styles.buttonText}>Red Light</Text>
        </TouchableOpacity>
        <View style={{ height: 3 }} />
        <TouchableOpacity
          style={styles.greenLightButton}
          onPress={() => sendCoordinates("GreenLight")}
        >
          <Text style={styles.buttonText}>Green Light</Text>
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
