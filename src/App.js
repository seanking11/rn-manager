import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBhOSqIW9vUpTJraCFEMGWXJAj3bigqqtA',
      authDomain: 'rn-manager-cd595.firebaseapp.com',
      databaseURL: 'https://rn-manager-cd595.firebaseio.com',
      projectId: 'rn-manager-cd595',
      storageBucket: 'rn-manager-cd595.appspot.com',
      messagingSenderId: '1005333706368'
    }

    firebase.initializeApp(config)
  }

  render() {
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App
