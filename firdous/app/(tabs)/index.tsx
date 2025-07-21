import React from 'react';
import { Text, StyleSheet, View , Image} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.HomePage}>
      <Image
        source={require('../../assets/images/partial-react-logo.png')}
        style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }}
      />
      <Text style={styles.HeadTitel}>
        Welcome to Firdous!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HomePage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  HeadTitel: {
    textAlign: 'center',
    color: '#169099ff',
    justifyContent: 'center',
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
    gap: 8,
  },
});
