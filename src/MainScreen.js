import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  'https://img.freepik.com/premium-photo/gta-poster-design_641525-317.jpg?w=740',
  'https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-store-art-01-en-9mar22?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/minecraft-squareboxart-01-ps4-05dec19-en?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/disney-dreamlight-valley-store-artwork-01-en-28apr22?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/saints-row-store-art-01-en-29oct21?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/tom-clancys-rainbow-six-siege-packshot-01-en-4jan22?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/lego-star-wars-skywalker-saga-storeart-01-en-11feb22?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/battlefield-2042-store-art-01-en-22jun21?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/tom-clancys-rainbow-six-siege-packshot-01-en-4jan22?$600px--t$',
  'https://gmedia.playstation.com/is/image/SIEPDC/lego-star-wars-skywalker-saga-storeart-01-en-11feb22?$600px--t$',
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  rating: Math.floor(Math.random() * 5) + 1, // Generate a random rating between 1 and 5
  text: `LeagueX Gamings ${index + 1}`,
}));

export default function App({ navigation }) {
  const scrollx = React.useRef(new Animated.Value(0)).current;

  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome5
          key={i}
          name={i <= rating ? 'star' : 'star-half-alt'}
          size={16}
          color="#FF7F50"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Header Logo */}
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/C511BAQGwHj7-0Nw7-Q/company-background_10000/0/1583995105953/leaguex_gaming_cover?e=2147483647&v=beta&t=hdmNn5Bzszq_J4be2Dn3ujCv-yCw-GWGUV6Y-ROymvQ',
        }}
        style={styles.headerLogo}
      />

      <TouchableOpacity
        style={styles.menuIcon}
        
      >
        <FontAwesome5 name="bars" size={26} color="#FF7F50" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Search}
        onPress={() => navigation.navigate('SearchPage')}
      >
        <FontAwesome5 name="search" size={26} color="#FF7F50" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cart}
        onPress={() => navigation.navigate('CartScreen')}
      >
        <FontAwesome5 name="shopping-cart" size={26} color="#FF7F50" />
      </TouchableOpacity>

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollx.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('AnotherScreen', { item })}
            >
              <View
                style={{
                  width,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 18,
                    shadowColor: '#000',
                    shadowOpacity: 0.5,
                    shadowRadius: 30,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    borderRadius: 18,
                    padding: 12,
                    backgroundColor: '#ffff',
                    top: '42%',
                  }}
                >
                  <View
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      overflow: 'hidden',
                      alignItems: 'center',
                      borderRadius: 14,
                    }}
                  >
                    <Animated.Image
                      source={{ uri: item.photo }}
                      style={{
                        width: ITEM_WIDTH * 1.4,
                        height: ITEM_HEIGHT,
                        resizeMode: 'cover',
                        transform: [
                          {
                            translateX,
                          },
                        ],
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 10,
                      color: 'black',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                    }}
                  >
                    {renderStars(item.rating)}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: '8%',
    left: '6%',
    zIndex: 1,
  },
  cart: {
    position: 'absolute',
    top: '8%',
    right: '22%',
    zIndex: 1,
  },
  Search: {
    position: 'absolute',
    top: '8%',
    right: '12%',
    zIndex: 1,
  },
  headerLogo: {
    width: '80%', // Adjust the width of the logo as needed
    height: '6%', // Adjust the height of the logo as needed
    resizeMode: 'contain',
    position: 'absolute',
    top: '7%',
    left: '2%',
  },
});
