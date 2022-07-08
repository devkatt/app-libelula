import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

import DrawerNavigator from './navigators/DrawerNavigator';



const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#FFB5A7',
    background: '#FFFFFF'


  },
};


function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>

      <NavigationContainer theme={CombinedDefaultTheme}>
        <DrawerNavigator />
      </NavigationContainer>

    </PaperProvider >

  );
}




export default App;
