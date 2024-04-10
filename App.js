import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    alert(`Tên đăng nhập: ${username}\nMật khẩu: ${password}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.background}> 
        <View style={styles.content}>
          <Image
            style={{ width: 400, height: 400, resizeMode: 'contain', alignSelf: "center" }}
            source={require('./assets/Noragami.png')}
          />
          <TextInput
            style={[styles.textinput, styles.inputSquare]}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="while"
            color="while"
          />
          <TextInput
            style={[styles.textinput, styles.inputSquare]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="white"
            color="white"
            secureTextEntry={true}
          />
          <TouchableOpacity style={[styles.button, styles.buttonSquare]} onPress={handleClick}>
            <Text style={{ color: 'purple' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
  textinput: {
    borderWidth: 1, 
    borderColor: 'white', 
    marginVertical: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: '#CC9999', 
  },
  inputSquare: {
    width: '100%', 
  },
  button:{
    backgroundColor: 'violet',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonSquare: {
    width: '100%',
  },
});