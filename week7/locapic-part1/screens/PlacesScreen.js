import { TouchableOpacity, StyleSheet, Text, View, TextInput  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const placesData = [
  { name: 'Paris', latitude: 48.859, longitude: 2.347 },
  { name: 'Lyon', latitude: 45.758, longitude: 4.835 },
  { name: 'Marseille', latitude: 43.282, longitude: 5.405 },
 ];

 
export default function PlacesScreen({ navigation }) {
 return (
   <View style={styles.container}>
     <Text style={styles.text}>John Doe's places</Text>
     <View style={styles.inputbtn}>
      <TextInput style={styles.input} placeholder='New City'/>
      <TouchableOpacity style={styles.button} title="Go to map"
              onPress={() => navigation.navigate("TabNavigator")}>
              <Text style={styles.go}>Add</Text>
            </TouchableOpacity>
     </View>
     <View style={styles.city}>
        {placesData.slice(0, 1).map((place) => (
          <View key={place.name}>
            <Text>{place.name}</Text>
            <Text>Latitude: {place.latitude}, Longitude: {place.longitude}</Text>
          </View>
        ))}
        <FontAwesome name='trash-o'size={15} color='red' />
      </View>
      <View style={styles.city}>
        {placesData.slice(1, 2).map((place) => (
          <View key={place.name}>
            <Text>{place.name}</Text>
            <Text>Latitude: {place.latitude}, Longitude: {place.longitude}</Text>
          </View>
        ))}
        <FontAwesome name='trash-o'size={15} color='red' />

      </View>
      <View style={styles.city}>
        {placesData.slice(2, 3).map((place) => (
          <View key={place.name}>
            <Text>{place.name}</Text>
            <Text>Latitude: {place.latitude}, Longitude: {place.longitude}</Text>
          </View>
        ))}
        <View>
          <FontAwesome name='trash-o'size={15} color='red' />
        </View>

      </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
   
    fontSize: 25,
    fontWeight: 600,
  },

  inputbtn:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  input:{
    margin: 5,
    height: 30,
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'red',
    fontSize: 20,

  },

  button:{
    backgroundColor: 'red',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 30,
  },

  go:{
    color: 'white'
  },

  city:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 80, 
    width: 280,
    margin: 10,
    borderRadius: 8,

    



  }

})