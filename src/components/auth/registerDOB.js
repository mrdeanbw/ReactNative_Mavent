import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerDOB extends Component {
  constructor(props) {
      super(props);

      this.state = {
          maxDate: new Date()
      };
    }

  onDobChange(text) {
    this.props.dobRegChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>When is your birth date?</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          This information will be hidden from public. This information is for us to serve you better!
        </Text>
        <View style={{ height: 15 }}></View>
          <DatePicker
              style={styles.datepicker}
              date={this.props.dob}
              mode="date"
              placeholder="DOB"
              format="DD-MM-YYYY"
              minDate="02-01-1900"
              maxDate={this.state.maxDate}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => { this.onDobChange(date); }}
          />
        <View style={{ height: 50 }}></View>
        <Button
          raised
          title="Next"
          large
          backgroundColor='#0B486B'
          fontSize={16}
          fontWeight="400"
          buttonStyle={{ width: 0.80 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
          onPress={() => Actions.registerGender()}
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
  datepicker: {
      width: 0.4 * SCREEN_WIDTH,
  },
});

function mapStateToProps({ reg }) {
  const { dob } = reg;
  return { dob };
}

export default connect(mapStateToProps, ractions)(registerDOB);
