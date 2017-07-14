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
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerTnC extends Component {

  onButtonPress() {
    this.props.checkContent();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Almost there!</Text>
        <View style={{ height: 10 }}></View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#A9A9A9', paddingLeft: 18, paddingRight: 18 }}>
        By signing up, you agree with Mavent Terms and you have read through our Data Policy, including our Cookie Use.
        </Text>
        <View style={{ height: 50 }}></View>
        <Button
          raised
          title="Sign Up"
          large
          backgroundColor='#0B486B'
          fontSize={16}
          fontWeight="400"
          buttonStyle={{ width: 0.80 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
          onPress={this.onButtonPress.bind(this)}
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

function mapStateToProps({ reg }) {
  const { email,
          password,
          firstname,
          lastname,
          gender,
          dob,
        } = reg;

  return { email,
           password,
           firstname,
           lastname,
           gender,
           dob,
          };
}
export default connect(mapStateToProps, ractions)(registerTnC);
