import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { SocialIcon, Icon } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
import data from './reviews.json';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
class Profile extends Component {

  state = {
      id: 1,
      details: []
  }

  componentWillMount() {
    this.fetchdetails();
  }

  componentDidMount() {

  }

  fetchdetails = () => {
    const getID = 'https://graph.facebook.com/me?access_token=' + this.props.token;
    fetch(getID)
      .then((response) => response.json())
        .then((responseData) => this.setState({ id: responseData.id }, () => {
          const fetchdetails = 'https://graph.facebook.com/v2.9/' + this.state.id + '?fields=name,first_name,last_name,gender,age_range,email&access_token=' + this.props.token;
          fetch(fetchdetails)
            .then((response) => response.json())
              .then((responseData1) => this.setState({ details: responseData1 }));
          }
       ));
  }

  renderReview = () => {
    return data.slice(0, 4).map((reviews) => {
      return (
        <View key={reviews.id} style={{ borderBottomWidth: 1, borderColor: '#EDF4F7', alignItems: 'center', justifyContent: 'center', paddingBottom: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', paddingRight: 5 }}>{reviews.Reviewer_Name}</Text>
              <StarRating
                disabled
                maxStars={5}
                rating={parseInt(reviews.rating, 10)}
                starSize={16}
                starColor="#FFDD44"
              />
          </View>
          <Text style={{ fontStyle: 'italic' }}>{reviews.content}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#0B486B', flex: 1 }} >
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
            <View style={styles.ball} />
            <Image source={require('../../../assets/images/profile.png')} style={{ height: 150, width: 150, borderRadius: 75, position: 'absolute' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 2 }}>
            <Text style={{ fontSize: 26, color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: { width: 2, height: 1 } }}>{this.state.details.name}</Text>
            <Text style={{ fontSize: 18, color: 'white', paddingBottom: 2 }}>{this.state.details.email}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'rgba(17, 109, 161, 0.9)', flex: 1.7, flexDirection: 'column' }}>
          <View style={{ flex: 0.9, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ height: 50, width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(31, 95, 97, 0.9)', borderRightWidth: 1, }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>1094</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>FOLLOWERS</Text>
            </View>
            <View style={{ width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(31, 95, 97, 0.9)', borderRightWidth: 1, }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>223</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>FOLLOWING</Text>
            </View>
            <View style={{ width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20 }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>88</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>LIKES</Text>
            </View>
          </View>
            <View style={{ backgroundColor: 'rgba(196, 219, 231, 0.9)', flex: 5.5 }}>
              <View style={{ backgroundColor: 'white', flex: 1, margin: 12, borderRadius: 8 }}>

                <View style={{ alignItems: 'center', paddingBottom: 5, borderBottomWidth: 1, borderColor: '#EDF4F7' }}>
                  <Text style={{ fontSize: 16 }}>Verified</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <SocialIcon type='facebook' iconSize={14} style={{ height: 20, width: 20 }} />
                    <Icon name='email' size={20} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16 }}>Member since </Text>
                    <Text style={{ fontSize: 16 }}>12/06/2017</Text>
                  </View>
                </View>

                <View style={{ height: (Platform.OS === 'ios' ? 100 : 110), padding: 5, borderBottomWidth: 1, borderColor: '#EDF4F7', marginBottom: 0 }}>
                  <View style={{ paddingBottom: 3 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>About</Text>
                  </View>
                  <Text style={{ textAlign: 'center', fontSize: 16 }}>"I am a dedicated person. I enjoy reading, and the knowledge and perspective that my reading gives me has strengthened my teaching skills...."</Text>
                </View>

                <View style={{ height: 190, padding: 5, borderBottomWidth: 1, borderColor: '#EDF4F7' }}>
                  <View style={{ paddingBottom: 3 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Skills and Expertise!</Text>
                  </View>
                  <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5 }}>
                    <Text style={{ fontSize: 18 }}>Photographer</Text>
                    <StarRating
                      disabled
                      maxStars={5}
                      rating={3.5}
                      starSize={20}
                      starColor="#FFDD44"
                    />
                  </View>
                  <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5 }}>
                    <Text style={{ fontSize: 18 }}>Math Tutor</Text>
                    <StarRating
                      disabled
                      maxStars={5}
                      rating={5}
                      starSize={20}
                      starColor="#FFDD44"
                    />
                  </View>
                  <TouchableOpacity onPress={() => Actions.ListSkill()}>
                    <View style={{ height: 50, backgroundColor: 'rgba(177, 183, 185, 0.1)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
                      <Icon name='add-circle' color='rgba(177, 183, 185, 0.6)' />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ height: (Platform.OS === 'ios' ? 240 : 270), padding: 5 }}>
                  <View style={{ paddingBottom: 3, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Reviews</Text>
                    <Text> (</Text><Text>{data.length}</Text><Text>)</Text>
                  </View>
                  <View style={{ paddingBottom: 10 }}>
                    {this.renderReview()}
                    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={() => alert('Loading more reviews!')}>
                        <Icon name='more-horiz' color='rgba(177, 183, 185, 0.6)' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
        </View>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
  height: 160,
  width: 160,
  borderRadius: 80,
  borderWidth: 80,
  borderColor: 'white',
  shadowColor: 'black',
  shadowOpacity: 0.5,
  shadowRadius: 5,
  }
  });

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps)(Profile);
