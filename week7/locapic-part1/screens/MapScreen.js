import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default function MapScreen({ navigation }) {
 return (
   <View style={styles.container} >
     <Image style={styles.image} 
          source={require("../assets/map.jpg")}/>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image:{
    padding: 24,
    marginTop: 10,
    height: 610,
    width: 380,
  },

})