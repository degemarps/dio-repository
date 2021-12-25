import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import photo from './assets/rsz_eu.jpg';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <>
      <SafeAreaView style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={photo} style={style.photo}/>
          <Text style={style.name}>DEGEMAR PEREIRA DA SILVA</Text>
          <Text style={style.job}>Desenvolvedor Web</Text>
          <View style={style.socials}>
            <Icon name='github' size={30} />
            <Icon name='facebook' size={30}/>
            <Icon name='linkedin' size={30}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  containerCabecalho: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  job: {
    marginBottom: 10,
    color: '#939393',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});

export default App;