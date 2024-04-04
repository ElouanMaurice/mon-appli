import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { UserState, addPhoto } from '../reducers/user';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function GalleryScreen() {
  const user = useSelector((state: { user: UserState }) => state.user.value);

 

  const photos = user.photos.map((photoUri: string, i: number) => {
    return (
      <View key={i} style={styles.photoContainer}>
        <FontAwesome
          name='times'
          size={20}
          color='#000000'
          style={styles.deleteIcon}
          onPress={() => {
            // TODO: Remove photo from user.photos
          }}
        />
        <Image source={{ uri: photoUri }} style={styles.photo} />
      </View>
    );
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.text}>Logged as: {user.email}</Text>

      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {photos}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  galleryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoContainer: {
    alignItems: 'flex-end',
  },
  photo: {
    margin: 10,
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  text: {
    marginBottom: 15,
  },
});
