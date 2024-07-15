import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground source={require('../../assets/check.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to our store</Text>
        <Text style={styles.subText}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 50,
    padding: 90,
  },
  subText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;