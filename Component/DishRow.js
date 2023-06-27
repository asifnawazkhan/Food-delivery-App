import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DishRow({item}) {
  return (
    
    <View style={styles.container}>
  <Image style={styles.image} resizeMode="cover" source={{ uri: item.image }} />    
  <View style={{flex:1,}}>
    <View style={{paddingLeft:10}}>
       <Text style={{fontSize:23,fontWeight:'bold'}}>{item.name}</Text>
       <Text style={{fontSize:13,color:'grey',}}>{item.description}</Text>

    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:12}}>
        <Text style={{color:'grey',fontWeight:'bold',fontSize:20}}>${item.price}</Text>
<View style={{flexDirection:'row',alignItems:'center'}}>
 <TouchableOpacity style={{padding:1,width:25,height:25,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginLeft:4}}>
 <Icon name="plus" size={22} color="white" />

 </TouchableOpacity>
 <Text style={{marginLeft:4,fontWeight:'bold',fontSize:20}}>2</Text>
 <TouchableOpacity style={{padding:1,width:25,height:25,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginLeft:4}}>
 <Icon name="minus" size={22} color="white" />

 </TouchableOpacity>

</View>
    </View>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    padding:10
  },
  image:{
    width:80,height:80,
    marginLeft:10,
    borderRadius:10

  }
});
