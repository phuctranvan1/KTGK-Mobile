import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    Alert.alert('Hello!');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={handleButtonPress}
        color="#841584"
        accessibilityLabel="Click this button to see an alert"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;