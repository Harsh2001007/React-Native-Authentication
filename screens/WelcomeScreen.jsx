import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>WelcomeScreen</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
