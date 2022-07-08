import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from '../navigators/TabNavigator';
import telaLogin from '../screens/telaLogin';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (

        <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">

            <Drawer.Screen name="Home" component={TabNavigator} options={{
        headerStyle: {
          backgroundColor: '#FFB5A7',
        }
      }}/>
            <Drawer.Screen name="Login" component={telaLogin} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;