import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { useState } from 'react'; 
import { Marker } from 'react-native-maps';

export default function App() {
	const [name, setName] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [locations, setLocations] = useState([]);

	const handleSubmit = () => {
		const newLocation = {
		  name: name,
		  latitude: Number(latitude),
		  longitude: Number(longitude),
		};
		setLocations([...locations, newLocation]);
		setName('');
		setLatitude('');
		setLongitude('');
	  };
	  const markers = locations.map((location, index) => (
		<Marker
		  key={index}
		  coordinate={{ latitude: location.latitude, longitude: location.longitude }}
		  title={location.name}
		/>
	  ));

	return (
		<View>
			<SafeAreaView style={styles.inputSection}>
				<TextInput
					placeholder='Place Name'
					style={styles.input}
					onChangeText={(value) => setName(value)}
					value={name}
				/>
				<TextInput
					placeholder='Latitude'
					style={styles.input}
					onChangeText={(value) => setLatitude(value)}
					value={latitude}
				/>
				<TextInput
					placeholder='Longitude'
					style={styles.input}
					onChangeText={(value) => setLongitude(value)}
					value={longitude}
				/>
				<Pressable style={styles.button} onPress={() => handleSubmit()}>
					<Text style={styles.buttonText}>Go</Text>
				</Pressable>
			</SafeAreaView>
			<MapView
				initialRegion={{
					latitude: 51.509093,
					longitude: -0.094151,
					latitudeDelta: 0.5,
					longitudeDelta: 0.5,
				}}
				style={styles.map}
			>
				        {markers}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		width: '100%',
		height: '70%',
	},
	inputSection: {
		width: '100%',
		height: '30%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		width: '80%',
		borderColor: 'gray',
		paddingHorizontal: 20,
		paddingVertical: 5,
		margin: 5,
		borderRadius: 10,
	},
	button: {
		marginTop: 5,
		paddingHorizontal: 12,
		paddingVertical: 3,
		borderRadius: 10,
		backgroundColor: '#16C172',
	},
	buttonText: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
});
