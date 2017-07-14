import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tested from './mainUI/Tested';

class Test2 extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ScrollableTabView
            initialPage={0}
            locked
            tabBarPosition='top'
          >

          <ScrollView
            tabLabel="My skills"
            style={{ flex: 1 }}
          >
            <View style={{ marginTop: 8 }}></View>
            <Tested />
          </ScrollView>

          <Text tabLabel='Requested Skills'>favorite</Text>

          <Text tabLabel='ALL'>project</Text>

          </ScrollableTabView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    // backgroundColor: 'blue',
  },
});

export default Test2;
