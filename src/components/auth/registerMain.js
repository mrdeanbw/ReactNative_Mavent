import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Join Mavent</Text>
        <View style={{ height: 10 }}></View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#A9A9A9', paddingLeft: 18, paddingRight: 18 }}>We are here to help you to create a new account in a few easy steps!</Text>
        <View style={{ height: 50 }}></View>
        <Button
          raised
          title="Next"
          large
          backgroundColor='#0B486B'
          fontSize={16}
          fontWeight="400"
          buttonStyle={{ width: 0.80 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
          onPress={() => Actions.registerName()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default registerMain;
