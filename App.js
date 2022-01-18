import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi My name is Anshuman Panda</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005685',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:4,
  },
 
});
