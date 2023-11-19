import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containers}>
   
      <Text>hello mrs</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    marginBottom:'80%',

  },
});
