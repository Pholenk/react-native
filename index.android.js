import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Warm_up extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./img/pholenk.png')} style={styles.foto}/>
        <Text style={styles.nama}>
          Bramanditya Adi Prabowo
        </Text>
        <Text style={{color:"#fafad2"}}>
          A.K.A
        </Text>
        <Text style={styles.other}>
          PholenkAdi
        </Text>
        <Text style={styles.group}>
          Member of {'\n'}
          CAMORRA de Famiglia
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2691e',
  },
  nama: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fafad2',
    textDecorationLine: 'underline',
  },
  other: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fafad2',
    marginBottom: 5,
  },
  group: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fafad2',
    marginBottom: 5,
  },
  foto: {
        height: 250,
        width: 175,
        borderRadius: 10,
        marginBottom: 14,
    },
});

AppRegistry.registerComponent('Warm_up', () => Warm_up);
