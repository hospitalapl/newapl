import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, BackHandler, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const Resources = require('../../../static/Resources.json');


export class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.onBackPress = this.onBackPress.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress() {
    this.props.navigateHome()
  }
  onHandleBack() {
    this.props.navigator.push({
      navigatorStyle: { navBarHidden: true },
      screen: 'AL.HomePage',
      passProps: {}
    })
  }
  render() {
    return (
      <View>
        <View style={{ width: responsiveWidth(100), height: responsiveHeight(6), backgroundColor: 'rgb(0,134,179)', flexDirection: 'row' }}>
          <TouchableOpacity style={{ height: responsiveHeight(5), flexDirection: 'row' }} onPress={() => this.onHandleBack()} >
            <Image style={{ marginLeft: 10, width: responsiveWidth(4), height: responsiveHeight(3), marginVertical: responsiveHeight(1.5) }} source={require('../../../img/back.png')} />
            <Text style={{ fontFamily: 'Raleway-SemiBold', marginLeft: 10, color: 'rgb(255,255,255)', marginVertical: responsiveHeight(1), fontSize: responsiveFontSize(2.5), width: responsiveWidth(75) }}>{"About Us"}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollheight}>
          <View style={styles.container}>
            <Image style={{ width: responsiveWidth(94), height: responsiveHeight(25) }} source={require('../../../img/1.jpeg')} />
          </View>
          <View style={styles.carouseltext}>
            <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.aboutUsPage.Aerialdesc}</Text>
            <Text style={{ fontSize: responsiveFontSize(2.2), color: 'rgb(0,0,0)', fontWeight: 'bold', marginVertical: responsiveHeight(1.5), fontFamily: 'Raleway-SemiBold' }}>{Resources.aboutUsPage.Aerial_sub1}</Text>
            <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, marginBottom: responsiveHeight(3), fontFamily: 'Raleway-Regular' }}>{Resources.aboutUsPage.Aerial_sub1_desc}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    height: responsiveHeight(25),
    backgroundColor: 'transparent',
  },
  scrollheight: {
    height: responsiveHeight(94),
    width: responsiveWidth(100),
    padding: 10
  },
  carouseltext: {
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(8)
  }
});
export default connect()(AboutUs);
