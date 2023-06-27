import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text,  View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ResturentCard({ item }) {
  const nevigation=useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>nevigation.navigate('ResturentScreen',{...item})}
    >
      
      <React.Fragment>
        <View style={[styles.container, { backgroundColor: 'white' }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>

            <Text style={{fontWeight:'bold',fontSize:16}}>{item.name}</Text>

            <View style={styles.text_below_image}>
            <Icon name="star" size={18} color="orange" style={{marginRight:4}}/>
            <Text>{item.stars}</Text>
            <Text style={{color:'grey'}}>({item.reviews} review).<Text style={{fontWeight:'bold'}}>{item.category}</Text></Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:6,}}>
            <Icon name="map" size={15} color="#900" />   
            <Text style={{color:'grey',marginLeft:10}}>Nearby {item.address}</Text>      
            </View>
          </View>
        </View>
      </React.Fragment>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft:0,
    borderRadius: 30,
    // Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  text_below_image:{
    flexDirection:'row',
    alignItems:'center',


  },
  image: {
    width: 225,
    height: 154,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 10,
    paddingBottom: 5,
    backgroundColor: 'white',
    marginBottom:5
  },
});
