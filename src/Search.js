import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchPage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // You can implement search functionality here
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={36} color="#FF6347" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#A9A9A9"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <FontAwesome5 name="search" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.infoText}>Type something to search</Text>
    </View>
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
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    color: '#A9A9A9',
  },
});

export default SearchPage;
