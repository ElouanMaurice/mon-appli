import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, } from 'react-native';


export default function HomeScreen({ navigation }) {
 return (
  <KeyboardAvoidingView
    behavior="position"
    style={styles.container}>
          <Image style={styles.image} 
          source={require("../assets/home-image.jpg")}/>
              <Text style={styles.text}>Welcome to Locapic</Text>
            <TextInput style={styles.input} placeholder='Nickname'/>
            <TouchableOpacity style={styles.button} title="Go to map"
              onPress={() => navigation.navigate("TabNavigator")}>
              <Text style={styles.go}>Go to map</Text>
            </TouchableOpacity>
  </KeyboardAvoidingView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  image: {
    padding: 24,
    marginTop: 10,
    height: 400,
    width: 370,
  },
  text:{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 45,
    fontWeight: 700,
    marginLeft: 30, 
  },

  input:{
    marginLeft: 30,
    marginTop: 15,
    height: 30,
    width: 300,
    borderBottomWidth: 2,
    borderColor: 'red',
    fontSize: 20,
  },
  go:{
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
    width: 300,
    height: 30,
  },

  button:{
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 30,
    height: 30,
  },



});