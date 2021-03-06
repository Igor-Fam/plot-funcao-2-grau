import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Gráfico de uma função de segundo grau" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;