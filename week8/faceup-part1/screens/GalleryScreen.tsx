import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, UserState } from '../reducers/user';

export default function GalleryScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.value);
  const photosData: string[] = [
    'https://static.lacapsule.academy/faceup/picture1.jpg',
    'https://static.lacapsule.academy/faceup/picture2.jpg',
    'https://static.lacapsule.academy/faceup/picture3.jpg',
    'https://static.lacapsule.academy/faceup/picture4.jpg',
   ];
   console.log("yehe", user)
 return (
   <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text >Loged as: {user.email}</Text>

      <View style={styles.picture}>
        {photosData.map((photoUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <FontAwesome name="times" size={20} color="#000" style={styles.closeIcon} />
              <Image style={styles.image} source={{ uri: photoUrl }} />
          </View>          
        ))}
      </View>
    </View>
 );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title:{
        marginTop: 50,
        color: 'black',
        fontSize: 35,
        fontWeight: "700",
    },
    picture:{
      display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageContainer: {
      position: 'relative',
    },
  
    image: {
      width: 150,
      height: 150,
      margin: 10,
    },
    
})