import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (    
    <View style={styles.container}>
      <Text>Open up HomeScreen.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});