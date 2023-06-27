import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Orderprepered() {
  const navigation = useNavigation();
  const position = useRef(new Animated.ValueXY({ x: -200, y: 0 })).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('deliveryscreen');
      }, 1000);
    });
  }, [position, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, { transform: position.getTranslateTransform() }]}
        source={{
          uri:
            'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=740&t=st=1687764658~exp=1687765258~hmac=fa9d638d42389593a9fe33a952b45c5c77029fd61a3821398996f80565e8aa64',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 400,
    borderRadius: 40,
  },
});
