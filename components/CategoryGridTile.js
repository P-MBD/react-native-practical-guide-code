import { FlatList,Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function CategoryGridTile() {
  return (   
      
      <FlatList 
                data={CATEGORIES}
                renderItem={({item,key})=>
                             <View style={[styles.innerContainer,{backgroundColor:item.color}]}>
                                      <Text style={styles.title}>{item.title}</Text>
                              </View>

                }
                keyExtractor={item=>item.id}
                numColumns={2}
            />      
      

  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});