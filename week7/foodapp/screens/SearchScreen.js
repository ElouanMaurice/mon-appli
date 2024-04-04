import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <View styles={styles.title}>
        <Text style={styles.title1}>What do you want to eat today?</Text>
        <Text>Our daily heathly meal plans</Text>
      </View>
      <View style={styles.liste}>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
          <View style={styles.fond1} >
          <Image style={styles.image1} 
              source={require("../assets/images/ramen.png")}/>
          </View>
        </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  liste:{
    marginHorizontal: 10,
    backgroundColor: 'red',
    width: 400,
    flexWrap: 'wrap',

  },

title: {
  justifyContent: "flex-start",
},
  title1:{
    fontSize: 30,
  },
  fond1:{
    backgroundColor:'#FFEB85',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 200,
    width: 150,
    margin: 5,

  },
  image1:{
    height: 100,
    width: 100,
  }
});
