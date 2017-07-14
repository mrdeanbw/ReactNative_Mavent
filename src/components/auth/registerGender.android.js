import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerGender extends Component {
  constructor(props) {
      super(props);

      this.state = {
          gender: 'Gender',
      };
  }

  onGenderChange(text) {
    this.props.genderRegChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>What is your gender?</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          This information is for us to serve you better!
        </Text>
        <View style={{ marginTop: 25, borderWidth: 0, borderColor: 'gray' }}>
          <Picker
              style={{ width: 0.3 * SCREEN_WIDTH, height: 20 }}
              selectedValue={this.props.gender}
              mode='dropdown'
              onValueChange={(gender) => this.onGenderChange(gender)}
          >
                  <Picker.Item label="Gender" value="-" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
          </Picker>
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
          onPress={() => Actions.registerPassword()}
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
  const { gender } = reg;
  return { gender };
}

export default connect(mapStateToProps, ractions)(registerGender);
