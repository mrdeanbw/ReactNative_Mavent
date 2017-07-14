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

class registerName extends Component {

  onFirstNameChange(text) {
    this.props.firstnameRegChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastnameRegChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>How can I address you?</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          Using your real name makes it easier for your neighbour to recognise you!
        </Text>
        <View style={{ marginTop: 25, width: 0.65 * SCREEN_WIDTH }}>
          <TextInput
              placeholder="First Name"
              placeholderTextColor="rgba(0,0,0,0.3)"
              returnKeyLabel="Next"
              onSubmitEditing={() => this.lastname.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
              underlineColorAndroid="transparent"
              ref={(input) => this.firstname = input}
              onChangeText={this.onFirstNameChange.bind(this)}
              value={this.props.firstname}

          />
          <TextInput
              placeholder="Last Name"
              placeholderTextColor="rgba(0,0,0,0.3)"
              returnKeyLabel="Next"
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
              underlineColorAndroid="transparent"
              ref={(input) => this.lastname = input}
              onChangeText={this.onLastNameChange.bind(this)}
              value={this.props.lastname}

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
          onPress={() => Actions.registerEmail()}
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
  const { firstname, lastname } = reg;
  return { firstname, lastname };
}

export default connect(mapStateToProps, ractions)(registerName);
