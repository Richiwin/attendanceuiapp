import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native';

const Splash = ({ route, navigation }) => {
  return (
    <>
      <ImageBackground source={require('../Assets/richiwin.jpeg')} style={styles.image}>
        <View style={styles.container}>
        <Text style={styles.title}>hello, Guys</Text>
   <Text style={styles.title}> welcome to my channel</Text>
          <Button
            title="Click to Continue"
            onPress={() => {
              console.log('Navigating to Login screen');
              navigation.navigate('login');
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 1000,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default Splash;

