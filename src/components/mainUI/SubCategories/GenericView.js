import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon, List, SearchBar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class GenericView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    // console.log(this.state);
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=8`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  renderHeader = () => {
   return <SearchBar placeholder="Type Here..." lightTheme round />;
 };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 0.09 * SCREEN_HEIGHT, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#CED0CE' }}>
          <View style={{ height: 0.065 * SCREEN_HEIGHT, flexDirection: 'row' }}>

            <View style={{ flex: 0.3, borderRightWidth: 1, borderColor: '#CED0CE', paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Tag</Text>
              <Text>Event: Wedding</Text>
            </View>

            <View style={{ flex: 0.3, borderRightWidth: 1, borderColor: '#CED0CE', paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Distance</Text>
              <Text>2 km radius</Text>
            </View>

            <View style={{ flex: 0.3, paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Filter</Text>
              <Text>Nearest</Text>
            </View>

          </View>
        </View>

        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={{ height: 100, width: SCREEN_WIDTH, flexDirection: 'row' }}>
                <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.picture.thumbnail }} style={{ height: 60, width: 60, borderRadius: 30 }} />
                  <Text>x.x km</Text>
                </View>

                <View style={{ flex: 3, paddingLeft: 3, paddingTop: 10 }}>
                  <Text style={{ fontSize: 14, color: '#8C8C8C' }}>{`${item.name.first} ${item.name.last}`}</Text>
                  <View style={{ height: 2 }}></View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.cat}</Text>
                  <View style={{ height: 8 }}></View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <StarRating
                      disabled
                      maxStars={5}
                      rating={3.5}
                      starSize={20}
                      starColor="#FFDD44"
                    />
                    <View style={{ backgroundColor: '#00CCE4', marginLeft: 8, borderRadius: 4, justifyContent: 'center', alignItems: 'center', width: 110, padding: 5 }}>
                      <Text style={{ color: 'white' }}>Event: Wedding</Text>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>

                  <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'space-around', width: 80 }}>
                      <TouchableOpacity onPress={() => Actions.GenericBookingPage({ title: `${item.name.first} ${item.name.last}` })}>
                        <Icon name='chat' size={35} iconStyle={{ paddingLeft: 2, }} />
                      </TouchableOpacity>
                      <Icon name='keyboard-arrow-right' size={30} iconStyle={{ paddingLeft: 2, }} />
                  </View>

                </View>
              </View>
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        </List>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    flex: 1
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
});

export default GenericView;
