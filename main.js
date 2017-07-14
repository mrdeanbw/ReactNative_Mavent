import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import Router from './src/components/Router';
import store from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
