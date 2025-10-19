import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return( 
    <View style={styles.container}>
      <Text style= {styles.title}> BIENVENUE </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d5c8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
