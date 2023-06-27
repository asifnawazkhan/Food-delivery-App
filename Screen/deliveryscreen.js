import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image } from 'react-native';
import { featured } from '../Constant';
import MapView, { Marker } from 'react-native-maps';
import { selectresturent } from '../Slices/restaurant';
import { useSelector } from 'react-redux';

export default function App() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectresturent);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
<Marker
       coordinate={{
    latitude: restaurant.lat,
    longitude: restaurant.lng,
  }}
     title={restaurant.name}
    description={restaurant.description}
/>

      </MapView>
      <View style={{borderTopRightRadius:40,borderTopLeftRadius:40,marginTop:0,paddingHorizontal:100,backgroundColor:'white',position:'relative'}}>
            <View style={{flexDirection:'row', paddingBottom:10,paddingTop:10,width:'100%'}}>
                  <View>
                    <Text style={{fontSize:18,fontWeight:'',color:'grey'}}>Estimate Arrival</Text>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>20-30 minutes</Text>
                    <Text style={{fontSize:16,color:'grey',width:200}}>Your order is own its way</Text>
                  </View>
                  <Image source={{ uri: 'https://img.freepik.com/free-vector/delivery-guy-motor-scooter-wearing-mask_23-2148498576.jpg?size=626&ext=jpg&uid=R105488339&ga=GA1.2.1017244141.1631556354&semt=ais' }} style={styles.image} />
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 66,
    backgroundColor: 'red',
    alignItems: 'center'
  },
});
