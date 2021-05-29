import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { applyMiddleware, createStore } from 'redux'
import reducers from './src/redux/reducers'
import HomeScreen from './src/views/home/HomeScreen'
import TracksDetailsScreen from './src/views/tracks/TracksDetailsScreen'

const Stack = createStackNavigator()
const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#152335',
    card: '#152335',
    text: '#FFF'
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              headerTitle: 'Poll, Top, Tracks this Week',
              headerTitleAlign: 'center',
              headerTitleStyle: {fontSize: 12}
            }}
          />
          <Stack.Screen name="TracksDetails" component={TracksDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App