import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Shoes from '../src/components/Shoes'

import produtos from '../assets/data/produtos.json';

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <FlatList data={produtos} numColumns={2} renderItem={({ item }) => (
        < Shoes img={{ uri: item.foto }} cost={item.preco}
          cost2={item.nome} onClick={() => navigation.navigate('Details', { "produto": item })}>
        </Shoes>
      )
      }>
      </FlatList >
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }

})
export default HomeScreen;