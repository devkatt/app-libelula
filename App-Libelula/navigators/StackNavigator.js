import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/Details';

const DetailsStackNavigator = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
     screenOptions={{
      headerShown: true}}>
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#FFB5A7'
          },
          headerLeft: () => (
            <View style={{ margin: 7 }}>
              <Icon
                name='bars'
                size={22}
                color={'#000'}
                onPress={() => navigation.openDrawer()}
    
    
              />
            </View>
          )
  
      }}/>
      
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
};

export default DetailsStackNavigator;
