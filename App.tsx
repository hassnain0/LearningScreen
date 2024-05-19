import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <StatusBar backgroundColor={'black'} />
      <Image source={require('./assets/Logo.png')} style={{ alignSelf: 'center', width: 100, marginTop: 20, marginBottom: 20 }}></Image>
      <Text style={styles.TextContainer}>It's your name.</Text>
      <Text style={styles.TextContainer}>Own it.</Text>
      <Text style={{ color: 'white', fontWeight: '400', textAlign: 'center', marginTop: 10, }}>Unlock tFe Avater State by forging a digital identity</Text>
      <View style={{ flexDirection: 'row', marginLeft: 32, marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Player Tag</Text>
        <View style={{ position: 'relative', marginLeft: 5 }}>
          <View style={{ position: 'relative' }}>
            <Image source={require('./assets/Ellipse.png')} style={{ width: 20, height: 20 }} />
            <Image source={require('./assets/i.png')} style={{ position: 'absolute', top: 5, left: 8, width: 4, height: 12 }} />
          </View>
        </View>
      </View>
      <TextInput style={{ borderWidth: 1, alignSelf: 'center', width: 350, top: 5, borderRadius: 10, borderColor: 'grey', paddingHorizontal: 20 }} placeholder='check player tag availability' placeholderTextColor={"grey"} ></TextInput>
      <Text style={{ color: 'grey', fontSize: 12, textAlign: 'center', marginTop: 5 }}>Must be xx character and xxx</Text>
      <TextInput style={{ borderWidth: 1, alignSelf: 'center', width: 350, top: 5, borderRadius: 10, borderColor: 'grey', }} placeholder='Patrik' placeholderTextColor={"white"} ></TextInput>
      <Image source={require('./assets/Man.png')} style={{ alignSelf: 'center' }}></Image>
      <TouchableOpacity style={{ backgroundColor: '#588200', borderRadius: 10, height: 50, margin: 10, borderColor: 'white', borderWidth: .5 }}>
        <Text style={{ textAlign: 'center', color: 'white', margin: 10, fontWeight: '700', fontSize: 15 }}>CONTINUE</Text>
      </TouchableOpacity>
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
