import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, useWindowDimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import {Dimensions} from 'react-native';
import * as Location from 'expo-location';
import { addPlace } from '../reducers/user';

export default function MapScreen() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.user.value.places);

  const [location, setLocation] = useState(null);
  const [longPressLocation, setLongPressLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlaceName, setNewPlaceName] = useState('');
  const {height, width} = useWindowDimensions ()

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (newLocation) => {
            setLocation(newLocation);
          });
      }
    })();
  }, []);

  const handleMapLongPress = (event) => {
    setLongPressLocation(event.nativeEvent.coordinate);
    setModalVisible(!modalVisible);
  };

  console.log("longpresse", longPressLocation)
  const handleAddPlacePress = () => {
    if (longPressLocation) {
      dispatch(addPlace({
        name: newPlaceName,
        latitude: longPressLocation.latitude,
        longitude: longPressLocation.longitude,
      }));
      setLongPressLocation(null);
      setModalVisible(!modalVisible);
      setNewPlaceName('');
    }
  };

  return (
    <>
    <MapView 
      style={{  height, width }}

      initialRegion={{
        latitude: location? location.coords.latitude : 48.866667,
        longitude: location? location.coords.longitude : 2.333333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
     
      }}
      mapType="hybrid"
      onLongPress={handleMapLongPress}
    >
        
      {location && (
        <Marker 
      
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="My Location"
          pinColor="#fecb2d"
        />
      )}
      {places.map((place) => (
        <Marker
          key={place.name}
          title={place.name}
          pinColor="#ff0000"
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
        />
      ))}
    </MapView>
  
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modal}>

          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modalTextInput}
              placeholder="new Place"
              value={newPlaceName}
              onChangeText={setNewPlaceName}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAddPlacePress}
            >
              <Text style={styles.modalButtonText}>Add </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

   </>
  );
}
const styles = StyleSheet.create({
  modal:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.9,

  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 250,
    backgroundColor: '#fff',
  },
  modalButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 100,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
