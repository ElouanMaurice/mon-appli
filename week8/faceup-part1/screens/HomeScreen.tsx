import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, UserState } from '../reducers/user';


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();


  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const EMAIL_REGEX: RegExp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      dispatch(updateEmail(email)) 
      navigation.navigate("TabNavigator", { screen: "GalleryScreen" });
    } else {
      setEmailError("Invalid email address");
      console.log("error");
    }
  };
  

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <Image style={styles.image1} source={require("../assets/camera.png")} />
      <Text style={styles.title}>FaceUp</Text>
      <View style={styles.modal}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
          />
        <Text>{emailError}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          >
          <Text style={styles.go}>Go to gallery</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDD158',
    },
    image: {
        padding: 24,
        marginTop: 10,
        height: 580,
        width: 400,
        Color: 'yellow',

      },
    image1:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        height: 340,
        width: 420,
    },
    title:{
        textAlign: 'center',
        fontSize: 45,
        fontWeight: "500",
        marginTop: 10,
    },
    modal:{
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,

    },
    input:{
        marginLeft: 30,
        marginTop: 15,
        height: 30,
        width: 300,
        borderBottomWidth: 2,
        borderColor: 'black',
        fontSize: 20,
      },
    go:{
        textAlign: 'center',
        paddingTop: 5,
        color: 'black',
        width: 300,
        height: 30,
        fontSize: 20,
        fontWeight: "500",
    },

    button:{
        backgroundColor: '#FDD158',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 30,
        height: 50,
        
    },
})