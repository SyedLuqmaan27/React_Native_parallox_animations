import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate a delay (e.g., fetching data, loading resources)
    const splashTimer = setTimeout(() => {
      // Navigate to the main screen after the delay
      navigation.replace('MainScreen');
    }, 2000); // Adjust the delay time as needed (in milliseconds)

    // Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000, // Adjust the duration of the animation
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(splashTimer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/C511BAQGwHj7-0Nw7-Q/company-background_10000/0/1583995105953/leaguex_gaming_cover?e=2147483647&v=beta&t=hdmNn5Bzszq_J4be2Dn3ujCv-yCw-GWGUV6Y-ROymvQ',
        }}
        style={styles.headerLogo}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerLogo: {
    width: '180%', // Adjust the width of the logo as needed
    height: '9%', // Adjust the height of the logo as needed
    resizeMode: 'contain',
    position: 'absolute',
    top: '47%',
    right: '-39%',
  },
});

export default SplashScreen;
