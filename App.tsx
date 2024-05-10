/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,

  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <StatusBar backgroundColor={'black'} />
      <Image source={require('./assets/Logo.png')} style={{ alignSelf: 'center', width: 100, marginTop: 20, marginBottom: 20 }}></Image>
      <Text style={styles.TextContainer}>It's your name.</Text>
      <Text style={styles.TextContainer}>Own it.</Text>
      <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', marginTop: 10, }}>Unlock the Avater State by forging a digital identity</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Player Tag</Text>
        <View style={{ position: 'relative' }}>
          <Image source={require('./assets/Ellipse.png')} style={{ width: 20, height: 20 }} />
          <Image source={require('./assets/i.png')} style={{ position: 'absolute', top: 20, left: 20, width: 10, height: 10 }} />
        </View>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({

  TextContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
