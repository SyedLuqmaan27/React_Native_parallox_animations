// ItemDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleAddToCart = () => {
    // Implement the logic to add the item to the cart
    // For example, you can use a state or dispatch an action
    console.log(`Item ${item.text} added to cart!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="#FF7F50" />
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
        {/* You can add more header components if needed */}
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.photo }} style={styles.image} />
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <Text style={styles.price}>₹ 2000 </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.description}>
          A stunning poster for your gaming room. Enjoy the high-quality print featuring the latest game releases. Perfect for gaming enthusiasts.
        </Text>
        {/* Additional details or components can be added here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  addToCartButton: {
    backgroundColor: '#FF7F50',
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginTop: 10,
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    padding: 26,
    top:-40
  },
  text: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: '#555',
    fontSize: 14,
  },
});

export default ItemDetailScreen;
