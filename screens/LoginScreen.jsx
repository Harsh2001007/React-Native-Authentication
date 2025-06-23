import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const redirection = () => {
    navigation.navigate('welcome');
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={redirection}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
