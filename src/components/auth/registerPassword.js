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

class registerPassword extends Component {

  onPasswordChange(text) {
    this.props.passwordRegChanged(text);
  }

  onRetryPasswordChange(text) {
    this.props.retrypasswordRegChanged(text);
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Choose a Password</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          Please use a strong password to prevent easy access from unauthorised user.
        </Text>
        <View style={{ marginTop: 25, width: 0.65 * SCREEN_WIDTH }}>
          <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(0,0,0,0.3)"
              returnKeyLabel="Next"
              onSubmitEditing={() => this.retypepassword.focus()}
              secureTextEntry
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
              underlineColorAndroid="transparent"
              ref={(input) => this.password = input}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}

          />
          <TextInput
              placeholder="Retype Password"
              placeholderTextColor="rgba(0,0,0,0.3)"
              returnKeyLabel="Go"
              secureTextEntry
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
              underlineColorAndroid="transparent"
              ref={(input) => this.retypepassword = input}
              onChangeText={this.onRetryPasswordChange.bind(this)}
              value={this.props.retypepassword}
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
          onPress={() => Actions.registerTnC()}
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
    alignItems: 'center'
  },
});

function mapStateToProps({ reg }) {
  const { password, retrypassword } = reg;
  return { password, retrypassword };
}

export default connect(mapStateToProps, ractions)(registerPassword);
