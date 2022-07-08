import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Screen({ route }) {
    const produto = route.params.produto;
    return (
        <ScrollView contentContainerStyle={style.scroll}>
            <View>
                <View>
                    <Text style={[style.title, { fontSize: 22 }]}>{produto.nome}</Text>
                </View>

            </View>

            <Image source={{ uri: produto.foto }}
                style={style.image}
                resizeMode='cover'
            />
            <View style={style.titleView}>
                <Text style={[style.title, { fontSize: 26 },{padding: 24}]}>
                 {produto.preco}                              <MaterialIcons name="favorite-border" size={28} color="#FFB5A7" />
                </Text>
                
            </View>


            <Button style={[style.button, {padding: 5}]} mode="contained"
                onPress={() => console.log('Pressed')}>
                Adicionar ao carrinho      <MaterialIcons name="shopping-cart" size={24} />
            </Button>
            <Text style={[style.titleDesc, { fontSize: 24 }, {padding: 24}]}> Detalhes</Text>
            <Text style={[style.titleDeta, { fontSize: 18 }]}>Estoque                               22</Text>
            <Text style={[style.titleDeta, { fontSize: 18 }]}>Material                           Prata</Text>
            <Text style={[style.titleDeta, { fontSize: 18 }]}> Comprimento                 25cm</Text>
        </ScrollView >
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {

    },
    titleView: {
        alignSelf: 'flex-start'
    },
    titleDesc: {

    },
    titleDeta: {
        flexDirection: "column-reverse"
    },
    button: {
        width: '80%',
        textColor: '#803A2D',
    },
    scroll: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});