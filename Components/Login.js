import React, { useState, useRef} from 'react';
import { View, StyleSheet, Text, Button, Image,StatusBar, TextInput,Keyboard, KeyboardAvoidingView, ref, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ route, navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordInputRef = useRef(null); // Define the input ref


  const handleSignIn = () => {
    navigation.navigate('attendance');
  };
  

  return (
    <SafeAreaView style={styles.container}>
     <StatusBar barStyle="light-content" />
     <KeyboardAvoidingView behavior='padding' style={styles.container} onPress={Keyboard.dismiss}>
     <View  style={styles.container}>
     <View style={styles.container}>

     <View style={styles.logoContainer}>
     <Image style={styles.logo} source={require('../Assets/Logo.png')} >
     </Image>
     <Text style={styles.title}>Account Information</Text>
     </View>
    
    
   
       <View style={styles.infoContainer}>
       <TextInput style={styles.input}
       placeholder='Enter username/email'
       placeholderTextColor='rgba(255,255,255,0.8)'
       keyboardType='email-address'
       returnKeyType='next'
       autoCorrect={false}
       value={username}
       onChangeText={text => setUsername(text)}

       onSubmitEditing={() => this.txtPassword.focus()}
       />
       <TextInput 
       ref={input => (this.txtPassword = input)}
       style={styles.input}
       placeholder='Enter password'
       placeholderTextColor='rgba(255,255,255,0.8)'
       returnKeyType='go'
       autoCorrect={false}
       value={password}
       onChangeText={text => setPassword(text)}
       
       />
       <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
       <Text style={styles.buttonText}>SIGN IN</Text>
       
       </TouchableOpacity>
       </View>
     </View>
     </View>
    
     </KeyboardAvoidingView>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
 logoContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1
 },

 
  logo: {
    width: 128,
    height: 56,
    justifyContent: 'center',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 500,
    marginLeft: 10,
  },
  title: {
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 20,
    height:200,

  },

  input: {
    height: 40,
  justifyContent: 'left',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    color: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 79)',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Login;
