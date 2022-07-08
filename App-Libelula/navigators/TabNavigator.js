import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import FavoritosScreen from '../screens/FavoritosScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import StackNavigator from '../navigators/StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        < Tab.Navigator >
            <Tab.Screen name="Home" component={StackNavigator} options={{
                tabBarIcon: ({ focused, color }) => {
                    return (
                        <FontAwesome name="home" size={24} color={color} />

                    )
                }
            }}
            />

            < Tab.Screen name="Favoritos" component={FavoritosScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return (
                        <FontAwesome name="heart" size={24} color={color} />);
                }
            }} />

            < Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return (
                        <MaterialIcons name="shopping-cart" size={24} color={color} />);
                }
            }} />

            < Tab.Screen name="Perfil" component={PerfilScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return (
                        <FontAwesome name="user-circle" size={24} color={color} />);
                }
            }} />

        </Tab.Navigator >
    );
};

export default TabNavigator;
