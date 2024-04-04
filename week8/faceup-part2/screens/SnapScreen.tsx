import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState, useRef  } from 'react';
import { Camera } from 'expo-camera';
import { Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CameraType } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../reducers/user';


export default function SnapScreen() {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [flashTorch, setFlashTorch] = useState(false);
  const isFocused = useIsFocused();
  let cameraRef: any = useRef(null);

 useEffect(() => {
   (async () => {
     const { status } = await Camera.requestCameraPermissionsAsync();
     setHasPermission(status === 'granted');
   })();
 }, []);


 if (!hasPermission || !isFocused) {
  return <View></View>;
}



 const takePicture = async () => {
   const photo = await cameraRef.takePictureAsync({ quality: 0.3 });
   dispatch(addPhoto(photo));
   }

  return (
    <Camera   
    style={styles.container} 
    type={type} 
    flashMode={flashTorch ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off} 
    ref={(ref) => cameraRef = ref}>
    <View style={styles.menuhaut}>

    <TouchableOpacity style={styles.rotate} onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
      <FontAwesome name='rotate-right' size={20} color='#000000'  style={styles.rotate}/>
    </TouchableOpacity>
      

      <TouchableOpacity onPress={() => setFlashTorch(!flashTorch)}>
          {flashTorch ? (
            <FontAwesome name='flash' size={20} color='#000000' style={styles.deleteIcon} />
          ) : (
            <FontAwesome name='flash' size={20} color='#000000' style={styles.deleteIcon} />
          )}
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => takePicture()}>
        <FontAwesome name='circle-thin' size={50} color='#000000'  />
      </TouchableOpacity>

  </Camera>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuhaut:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  deleteIcon:{
    color: 'white',
  },
  rotate:{
    marginRight: 100,
    marginBottom: 150,
  },
});
