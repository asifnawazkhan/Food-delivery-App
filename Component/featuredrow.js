import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ResturentCard from '../Component/ResturentCard';

 function FeaturedRow({title,description,restaurants}) {

    return (
        <View>
            <View style={styles.main2}>
                <View style={{marginLeft:10}}>
                  <Text style={{fontWeight:'bold',fontSize:20}}>{title}</Text>
                  <Text style={{color:'grey',fontSize:10,fontSize:10}}>{description}</Text>
                </View>    
                <TouchableOpacity>
                <Text style={{color:'red',fontWeight:'bold',marginRight:10,fontSize:20}}>See All</Text>
            </TouchableOpacity>
            </View>
            
            <ScrollView
           horizontal
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={{
            paddingHorizontal:5,
           }}
           style={{padding:2}}
           >
             {
                restaurants.map((restaurants,index)=>{
                    return(
                        <ResturentCard
                        item={restaurants}
                        key={index}
                        />
                    )
                })
             }
           </ScrollView>
        </View>
    );

}
const styles = StyleSheet.create({

    main2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:4,
        fontWeight:'bold'
    }
    
});
export default FeaturedRow