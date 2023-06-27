import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { featured } from '../Constant';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../Slices/restaurant';

export default function Cartmodel() {
  const restaurants = useSelector(selectRestaurant);
  const nevigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => nevigation.goBack()}>
          <Icon name="arrow-left" size={25} color="orange" />
        </TouchableOpacity>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 20 }}>Your Card</Text>
          <Text style={{ textAlign: 'center', color: 'grey' }}>{restaurants.name}</Text>
        </View>
      </View>
      <View style={styles.image_delivery}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/delivery-guy-motor-scooter-wearing-mask_23-2148498576.jpg?size=626&ext=jpg&uid=R105488339&ga=GA1.2.1017244141.1631556354&semt=ais' }} style={styles.image} />
        <Text style={{ flex: 1, paddingLeft: 40, fontWeight: 'bold', fontSize: 16 }}>Delivery in 1 hour</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 18 }}>Change</Text>
        </TouchableOpacity>
      </View>
      {/* Dishes */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }} style={{ backgroundColor: 'white', paddingTop: 5 }}>
        {restaurants.dishes.map((dishes, index) => {
          return (
            <View key={index} style={[styles.dishContainer, { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }]}>
              <Text style={{ fontWeight: 'bold', color: 'orange',fontSize:20,marginLeft:10 }}>2x</Text>
              <Image source={{ uri: dishes.image }} style={styles.image2} />
              <Text style={{fontWeight:'bold',marginLeft:13,fontSize:18,color:'grey'}}>{dishes.name}</Text>
              <Text style={{fontWeight:'bold',fontSize:20,marginLeft:80}}>${dishes.price}</Text>
              <TouchableOpacity style={{padding:1,width:25,height:25,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginLeft:10}}>
              <Icon name="minus" size={22} color="white" /> 
             
              </TouchableOpacity>

            </View>
          );
        })}
         </ScrollView>
        {/*viw cart*/}

        <View style={{width:'100%',borderTopRightRadius:20,borderTopLeftRadius:20,backgroundColor:'#FFDEFA',}}>
           <View style={{flexDirection:'row'}}>
            <Text style={{color:'grey',marginLeft:35,marginTop:15,fontSize:17,}}>SubTotal</Text>
            <Text style={{color:'grey',marginTop:15,marginLeft:174,fontSize:15,}}>$19</Text>
           </View>
           <View style={{flexDirection:'row'}}>
            <Text style={{color:'grey',marginLeft:35,marginTop:5,fontSize:17,}}>Delivery Fee</Text>
            <Text style={{color:'grey',marginTop:5,marginLeft:150,fontSize:15,}}>$5</Text>
           </View>
           <View style={{flexDirection:'row'}}>
            <Text style={{color:'grey',marginLeft:35,marginTop:5,fontSize:17,}}>Order Total</Text>
            <Text style={{color:'grey',marginTop:5,marginLeft:156,fontSize:15,}}>$22</Text>
           </View>
           {/*Cartsee*/}
           <View style={styles.container}>
           <TouchableOpacity style={styles.opcity} onPress={()=>nevigation.navigate('Orderprepered')}>
      
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>Placed Order</Text>
        </View>

      </TouchableOpacity>
      </View>
        </View>



     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    top: 9,
    position: 'absolute',
    left: 10,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFDEFA',
    width: '100%',
    height: 80,
    paddingHorizontal: 15,
    marginTop: 12
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 66,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  image2: {
    width: 64,
    height: 64,
    marginLeft: 10,
    borderRadius: 64
  },
  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    marginTop:10,
    padding: 10,
    elevation: 5, // Add elevation for Android shadow
  },

  //opicity
  opcity: {
    flexDirection: 'row',
    alignItems: 'center',
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
  container: {
   
    backgroundColor: 'orange',
    borderRadius: 26,
    paddingHorizontal: 0,
    paddingVertical: 13,

    width: 250,
    marginLeft: 59,
    marginTop:10,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 
});


