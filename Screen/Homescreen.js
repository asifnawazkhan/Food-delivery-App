import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Catagaries from '../Component/Categories';
import FeaturedRow from '../Component/featuredrow';
import { featured } from '../Constant';

export default function HomeScreen() {
    return (
      <View style={styles.big_container}>
        <SafeAreaView style={styles.scroll_container}>


            <View style={styles.searchV_contianer}>
                 <View style={styles.searchV2}>
                 <Icon name="search" size={20} color="black" />
                 <TextInput placeholder='Resturent' style={styles.Textinput_Search}/>
                 <View style={styles.Loction_V_Search}>
                 <Icon name="map" size={20} color="#900" />
                 <Text style={{fontSize:20,color:'grey',paddingLeft:4}}>Taxila</Text>
            </View>

             </View>
             <View style={styles.Rounded_slider}>
                 <Icon name="sliders" size={30} color="white" />

                 </View>
            </View>
            

        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom:20,
            }}>
            <Catagaries/>
            <View style={{marginTop:5}}>
             
               {
                [featured,featured,featured].map((item,index)=>{
                  return(
                    <FeaturedRow
                    key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}
              
                    
                    />
                  )
                     
                })
               }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  big_container:{
    backgroundColor: '#fff',
  },
    scroll_container: {
         alignItems:'center',
         backgroundColor: '#fff',
         padding:60,
         paddingTop:0,
         paddingBottom:0
    },
    searchV_contianer:{

      flexDirection:'row',
      alignItems:'center',
      paddingTop:20,
      padding:60,
      paddingBottom:0,
      width:430

    },
    searchV2:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     padding:5,


     borderWidth:2,
     borderRadius:50

    },
    Textinput_Search:{
      marginLeft:10,
      flex:1,

    },
    Loction_V_Search:{
      flexDirection:'row',
      alignItems:'center',
      borderLeftWidth:2,
     borderLeftColor:'grey',
     paddingLeft:5,

    },
    Rounded_slider:{
    padding:2,
    width:43,
    height:43,
    borderRadius:66,
    backgroundColor:'orange',
    textAlign:'center',
    alignItems:'center',
    marginLeft:4

    }

    
});
