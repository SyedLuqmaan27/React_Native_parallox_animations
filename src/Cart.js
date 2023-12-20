import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={36} color="#FF6347" />
      </TouchableOpacity>
      <FontAwesome5 name="box" size={100} color="#FF6347" />
      <Text style={styles.text}>Your Cart is Empty</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: "10%",
    left: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default CartPage;
