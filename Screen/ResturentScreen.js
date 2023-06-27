import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DishRow from '../Component/DishRow';
import CartIcon from '../Component/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../Slices/restaurant';
import { emptyBasket } from '../Slices/Cartslices';

export default function ResturentScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  const restaurant = useSelector(selectRestaurant);
  let dispatch = useDispatch();

  useEffect(() => {
    if (restaurant && restaurant.id !== item.id) {
      dispatch(emptyBasket());
    }
    dispatch(setRestaurant({
      id: item.id,
      title: item.title,
      imgUrl: item.imgUrl,
      rating: item.rating,
      genre: item.genre,
      address: item.address,
      description: item.description,
      dishes: item.dishes,
      lng: item.lng,
      lat: item.lat,
    }));
  }, []);
  return (
    <View>
   
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="cover" source={{ uri: item.image }} />
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="orange" />
          </TouchableOpacity>
        </View>
        <ImageBackground source={{ uri: item.image }} style={styles.backgroundImage}>
          <View style={styles.b_s_R}>
            <Text style={styles.resturentName}>{item.name}</Text>
            <View style={styles.textContainer}>
              <View style={styles.text_below_image}>
              <Icon name="star" size={18} color="orange" style={{marginRight:4}}/>

                <Text style={{fontSize:13}}>{item.stars}</Text>
                <Text style={{ color: 'grey',fontSize:13 }}>({item.reviews} reviews). <Text style={styles.category}>{item.category}</Text></Text>
              </View>
              <View style={styles.addressContainer}>
                <Icon name="map" size={13} color="#900"/>
                <Text style={styles.addressText}>Nearby {item.address}</Text>
              </View>
            </View>
            <Text style={{marginTop:10,fontWeight:'bold',fontSize:16}}>{item.description}</Text>

          </View>
          
        </ImageBackground>
      </View>
      <View style={{backgroundColor:'white',paddingBottom:225}}>
        <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,paddingTop:20}}>Menu</Text>
        {
          item.dishes.map((dish,index)=><DishRow item={{...dish}} key={index}/>)
        }
      </View>
    </ScrollView>
    <CartIcon/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
  image: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  b_s_R: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    
  },
  resturentName: {
    fontWeight: 'bold',
    fontSize: 20,

    marginLeft:20
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_below_image: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontWeight: 'bold',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  addressText: {
    color: 'grey',
    marginLeft: 5,
    fontSize:13

  },
});
