import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { categories } from '../Constant';
import { useState } from 'react';

export default function Catagaries() {
  const [activecatagries, setactivecatagries] = useState(null);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 15
      }}
    >
      {categories.map((Catagaries, index) => {
        let isactive = Catagaries.id == activecatagries;
        let btnclass = isactive ? { backgroundColor: 'orange', borderColor: 'white' } : null;
        let fonttext = isactive ? { fontWeight: 'bold', color: 'green' } : { fontWeight: 'bold', color: 'black' };

        return (
          <View key={index} style={styles.category}>
            <TouchableOpacity
              style={[styles.categoryButton, btnclass]}
              onPress={() => setactivecatagries(Catagaries.id)}
            >
              <Image
                style={styles.categoryImage}
                source={{ uri: Catagaries.image }}
              />
            </TouchableOpacity>
            <Text style={[styles.categoryText, fonttext]}>{Catagaries.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    margin: 6,
    alignItems: 'center',
  },
  categoryButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 35,
    height: 25,

    alignItems:'center'
  },
  categoryText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
