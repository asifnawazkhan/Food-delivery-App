import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartIcon() {
    const nevigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.opcity} onPress={()=>nevigation.navigate('Cart')}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>3</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>View cart</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>$(23)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'orange',
    borderRadius: 26,
    paddingHorizontal: 14,
    paddingVertical: 12,

    width: 330,
    marginLeft: 13,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  opcity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
