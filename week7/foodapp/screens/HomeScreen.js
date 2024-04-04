import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} 
          source={require("../assets/images/home.jpg")}/>
      <View style={styles.text1position}>        
      <Text style={styles.text}>FoodApp</Text>
      <TouchableOpacity style={styles.button} title="Go to map"
        onPress={() => navigation.navigate("DrawerNavigator")}>
        <Text style={styles.text1}>Let's go!</Text>      
      </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#655074",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image:{
    height: 480,
    width: 377,
    borderBottomLeftRadius: 150,
  },

  text:{
    fontSize: 70,
    fontWeight: 600, 
    color:'white',
  },

  text1position:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  text1:{
    fontSize: 20,
    fontWeight: 600, 
    color:'white',
    margin: 5,
  }
});
