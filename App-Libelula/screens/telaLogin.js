import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Text style={{ color: '#black', padding: 40, fontWeight: 'bold' }}>Acesse a sua conta</Text>

            <Text style={styles.entradas}>E-mail</Text>
            <TextInput style={styles.TextInput} onchange={text => setEmail(text)} />

            <Text style={styles.entradas}>Senha</Text>
            <TextInput secureTextEntry={true} style={styles.TextInput} onchange={text => setSenha(text)} />

            <TouchableOpacity style={styles.btnCadastro}>
                <Text style={{ color: 'black', textAlign: 'center' }}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{ color: '#black', padding: 40, fontSize: 12 }}>Se ainda não tiver uma conta clique aqui</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    TextInput: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: "black",
        paddingHorizontal: 25,
        marginBottom: 30
    },
    btnCadastro: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFB5A7',
        justifyContent: 'center'
    },
    entradas: {
        width: '100%',
        justifyContent: 'center'
    }
});
