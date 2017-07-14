import _ from 'lodash';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Actions } from 'react-native-router-flux';
import Slides from './Slides';

//Need to fetch data from backend, or we can fixed it and update as per norm
const SLIDE_DATA = [
  { text: 'Welcome to Mavent', color: '#03A9F4' },
  { text: 'Get a job near you', color: '#009688' },
  { text: 'Start earning through gigs', color: '#03A9F4' },
  { text: 'Set your location, then swipe away', color: '#CC9752' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
      let token = await AsyncStorage.getItem('fb_token');
      // console.log(token);
      if (token) {
        Actions.mainUI();
        // Actions.discovery();
        this.setState({ token });
      } else {
        this.setState({ token: false });
      }
    }

  onSlidesComplete = () => {
    Actions.login();
  }

  render() {
    if (_.isNull(this.state.token)) {
        return <AppLoading />;
      }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
