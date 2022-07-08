import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Card, Title, IconButton } from 'react-native-paper';


export default function Shoes(props) {
  return (
    <TouchableOpacity style={Style.container} onPress={props.onClick}>
      <Card>
        <Card.Cover source={props.img}
          style={Style.shoesImg}
        />
        <Card.Content>
          <Title style={Style.shoesText}>
            {props.cost2}</Title>
        </Card.Content>
        <Card.Actions style={Style.actions}>
          <Title style={Style.shoesTxtPreco}>
            {props.cost}</Title>
          <IconButton
            style={Style.icon}
            icon="heart-outline"
            color='#DD9562'
            size={22}
            onPress={() => console.log('Pressed')}
          />
        </Card.Actions>
      </Card >
    </TouchableOpacity >
  );
}

const Style = StyleSheet.create({
  container: {
    paddingVertical: '10%',
    alingItems: 'center',
    justifyContent: 'space-around'
  },
  shoesImg: {
    width: 196,
    height: 196
  },
  shoesText: {
    fontSize: 17,
  },
  shoesTxtPreco: {
    fontSize: 19,
  },
  actions: {
    justifyContent: 'space-around',
    padding: 0
  }
})