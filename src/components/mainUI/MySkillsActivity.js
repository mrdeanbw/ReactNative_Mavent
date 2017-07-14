import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
import data from './request.json';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MySkillsActivity extends Component {

  state = {
    offered: true,
  };

  renderRow = () => {
    return data.map((request) => {
      return (
        <View key={request.id} style={{ height: 100, width: SCREEN_WIDTH, borderTopWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
          <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/profile.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
            <Text>{request.Dist}</Text>
          </View>

          <View style={{ flex: 3, paddingLeft: 3, paddingTop: 4 }}>
            <Text style={{ fontSize: 12, color: '#ccc' }}>{request.Name}</Text>
            <View style={{ height: 2 }}></View>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{request.Title}</Text>
            <View style={{ height: 2 }}></View>
            <Text style={{ fontSize: 13 }}>{request.Message}</Text>
          </View>

          <View style={{ flex: 1.5, alignItems: 'center' }}>
            <View style={(request.offered === 'true') ? styles.offered : styles.n_offered}>
              <Text style={{ fontSize: 12, color: 'white' }}>Offer:</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>{request.price}</Text>
            </View>

            <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'space-around', width: 80 }}>
                <Icon name='clear' size={30} iconStyle={{ paddingLeft: 2, borderWidth: 1, borderRadius: 3, borderColor: '#ccc' }} />
                <Icon name='done' size={30} iconStyle={{ paddingLeft: 2, borderWidth: 1, borderRadius: 3, borderColor: '#ccc' }} />
            </View>
          </View>

        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
      >
        {this.renderRow()}
      </ScrollView>
    );
  }
}

const styles = {
  listContainer: {
    flex: 1,
  },
  offered: {
    height: 40,
    width: 80,
    borderRadius: 3,
    marginTop: 4,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  n_offered: {
    height: 40,
    width: 80,
    borderRadius: 3,
    marginTop: 4,
    backgroundColor: '#bdc3c7',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default MySkillsActivity;
