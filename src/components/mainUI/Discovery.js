import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {
  MapView,
  Constants,
  Location,
  Permissions,
} from 'expo';
import { Icon } from 'react-native-elements';
import data from './provider.json';

const SCREEN_H = Dimensions.get('window').height;

class Discovery extends Component {

    state = {
      mapLoaded: false,
      errorMessage: null,
      location: null,
      region: {
        longitude: 103.8198,
        latitude: 1.3521,
        longitudeDelta: 0.0045,
        latitudeDelta: 0.0034
      }
    };


  componentWillMount() {
        this.getLocationAsync();
        // console.log(this.state.region);
    }

  componentDidMount() {

    // this.getLocationAsync();
     this.setState({ mapLoaded: true });
    // this.getLocationAsync();
     // console.log(this.state.region);
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
     // console.log({ status });
    if (status === 'granted') {
      Location.getCurrentPositionAsync({ enableHighAccuracy: true, maximumAge: 600000 }).then((position) => {
        // console.log({ position });
        const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0045,
            longitudeDelta: 0.0034,
        };
        this.setState({ region: userLocation });
        }).catch((e) => {
         // this one is firing the error instantly
          alert(e + ' Please make sure your location (GPS) is turned on.');
        });
    } else {
      throw new Error('Location permission not granted');
    }
  }

  renderRow() {
    return data.map((provider) => {
      return (
        <View key={provider.id} style={{ height: 80, backgroundColor: 'white', margin: 1, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Image source={require('../../../assets/images/profile.png')} style={{ height: 45, width: 45, borderRadius: 22 }} />
            <Text style={{ fontSize: 15 }}>{provider.Name}</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, paddingBottom: 15, paddingTop: 5 }}>{provider.Dist}</Text>
            <Text style={{ fontSize: 18 }}>{provider.Service}</Text>
          </View>
          <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='thumb-up' size={35} style={{ padding: 4 }} />
            <Icon name='chat' size={40} />
          </View>
        </View>
      );
    });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.mapContainer}>
        <MapView
          // provider="google"
          region={this.state.region}
          showsMyLocationButton
          showsUserLocation
          showsScale
          loadingEnabled
          style={{ height: 0.3 * SCREEN_H }}
        />
        <View style={styles.listContainer}>
          <View style={{ height: 40, borderTopWidth: 1, borderColor: 'gray', backgroundColor: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 13, color: 'white'  }}>Mavens in this area!</Text>
          </View>
          <ScrollView
            automaticallyAdjustContentInsets={false}
          >
            {this.renderRow()}
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = {
  mapContainer: {
    flex: 1,
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  listContainer: {
    backgroundColor: '#D5DED9',
    flex: 1,
  }
};

export default Discovery;
