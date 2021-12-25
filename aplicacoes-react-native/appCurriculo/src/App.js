import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import photo from './assets/rsz_eu.jpg';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <>
      <SafeAreaView style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={photo} style={style.photo} />
          <Text style={style.name}>DEGEMAR PEREIRA DA SILVA</Text>
          <Text style={style.job}>Desenvolvedor Web</Text>
          <View style={style.socials}>
            <Icon name='github' size={30} />
            <Icon name='facebook' size={30} />
            <Icon name='linkedin' size={30} />
          </View>
        </View>

        <ScrollView style={style.ScrollView}>
          <View style={style.cardContainer}>
            <View style={style.card}>
              <View style={style.cardHeader}>
                <Text>Experiência Profissional</Text>
              </View>
              <View style={style.cardContent}>
                <Text style={style.cardContentText}>IFRN</Text>
                <Text style={style.cardContentText}>SEEC </Text>
                <Text style={style.cardContentText}>SEMPLA</Text>
              </View>
            </View>
          </View>

          <View style={style.cardContainer}>
            <View style={style.card}>
              <View style={style.cardHeader}>
                <Text>Formação Acadêmica</Text>
              </View>
              <View style={style.cardContent}>
                <Text style={style.cardContentText}>Desenvolvedor Full Stack</Text>
                <Text style={style.cardContentText}>Superior em Redes</Text>
                <Text style={style.cardContentText}>Técnico em Eletrônica</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  containerCabecalho: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  ScrollView: {
    width: '100%',
    marginBottom: 10,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    backgroundColor: '#FFF',
    padding: 10,
  },
  cardContent: {
    marginTop: 20,
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;