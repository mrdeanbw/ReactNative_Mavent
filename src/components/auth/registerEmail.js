import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerEmail extends Component {
  
  onEmailChange(text) {
    this.props.emailRegChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter your email address</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          This email will be used to log you in and if you ever need to reset your password.
        </Text>
        <View style={{ marginTop: 25, width: 0.65 * SCREEN_WIDTH }}>
          <TextInput
              placeholder="Email Address"
              placeholderTextColor="rgba(0,0,0,0.3)"
              returnKeyLabel="Next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
              underlineColorAndroid="transparent"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}

          />
        </View>
        <View style={{ height: 50 }}></View>
        <Button
          raised
          title="Next"
          large
          backgroundColor='#0B486B'
          fontSize={16}
          fontWeight="400"
          buttonStyle={{ width: 0.80 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
          onPress={() => Actions.registerDOB()}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps({ reg }) {
  const { email } = reg;
  return { email };
}

export default connect(mapStateToProps, ractions)(registerEmail);
