import { Button, StyleSheet, Text, View } from 'react-native';

export default function SnapScreen() {
 return (
   <View style={styles.container}>
     <Text style={styles.title}>SnapScreen</Text>
   
   </View>
 );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
        
    },
})