import React, { Component } from 'react';
import { View, Text,StyleSheet,Button,ScrollView,BackHandler, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';
import { responsiveHeight, responsiveFontSize ,responsiveWidth } from 'react-native-responsive-dimensions';

const json = {
  "pricinObj": 
    [
      {
        title: "Instant - Squares",
        price: "16.00",
        sub1:"Main Structure",
        sub2:"custom Logo",
        sub3:"Overhead photo with Outline",
        sub4:"Primary Pitch",
        sub5:"Total Squares",
        pdftitle:"Sample Instant - Squares PDF",
        pdfURL:""
      },
      {
        title: "Simple Residential 30 Sq",
        price: "25.00",
        sub1:"Main Structure",
        sub2:"custom Logo",
        sub3:"Overhead photo with Outline",
        sub4:"Primary Pitch",
        sub5:"Total Squares",
        pdftitle:"Sample Instant - Squares PDF",
        pdfURL:""
      },
      {
        title: "Complex Residential 30 + sq",
        price: "35.00",
        sub1:"Main Structure",
        sub2:"custom Logo",
        sub3:"Overhead photo with Outline",
        sub4:"Primary Pitch",
        sub5:"Total Squares",
        pdftitle:"Sample Instant - Squares PDF",
        pdfURL:""
      },
      {
        title: "Simple Commerical 60 Sq",
        price: "40.00",
        sub1:"Main Structure",
        sub2:"custom Logo",
        sub3:"Overhead photo with Outline",
        sub4:"Primary Pitch",
        sub5:"Total Squares",
        pdftitle:"Sample Instant - Squares PDF",
        pdfURL:"www.google.com"
      }
  ]
}
export class Pricing extends Component {
  constructor(props){
     super(props)
     this.state = {
       
     }
     this.onBackPress = this.onBackPress.bind(this);
  }
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress(){
    this.props.navigateHome()
  }
  handleOrder(){
    // this.props.navigator.push({
    //   navigatorStyle: {navBarHidden: true},
    //   screen: 'AL.SearchAddress',
    //   passProps: { }
    // })
  }
  onHandleBack(){
    this.props.navigator.push({
      navigatorStyle: {navBarHidden: true},
      screen: 'AL.HomePage',
      passProps: { }
    })
  }
  render(){
    return (
      <View>
        <View style={{width:responsiveWidth(100),height:responsiveHeight(6),backgroundColor:'rgb(0,134,179)',flexDirection:'row'}}>
          {/* <Text onPress={()=>this.onBackPress()}  style={{color:'rgb(255,255,255)',fontSize:responsiveFontSize(2),width:responsiveWidth(75),fontFamily: 'SFUIText-Regular',marginVertical:responsiveHeight(1)}}>{"Back"}</Text> */}
          <TouchableOpacity style={{height:responsiveHeight(5),flexDirection:'row'}} onPress={()=>this.onHandleBack()} >
            <Image style={{marginLeft:10,width:responsiveWidth(4),height:responsiveHeight(3),marginVertical:responsiveHeight(1.5)}} source={require('../../../img/back.png')} />
            <Text style={{marginLeft:10,color:'rgb(255,255,255)',marginTop:responsiveHeight(1),fontSize:responsiveFontSize(2.5),width:responsiveWidth(75),fontFamily:'Raleway-SemiBold'}}>{"Pricing"}</Text>
          </TouchableOpacity>
        </View>
      <ScrollView style={styles.scrollheight}>
        <View style={{marginBottom:responsiveHeight(8)}}>
          {json.pricinObj.map(pricinObj => (
            <View
              style={{
                width: responsiveWidth(94),
                borderWidth: 0.5,
                borderColor: '#cecece',
                // padding: 4,
                elevation: 0.5,
                borderRadius: 8,
                margin: 3,
              }}>
              <Text
                style={{
                  color: 'rgb(0,0,0)',
                  fontSize: responsiveFontSize(1.8),
                  backgroundColor: 'rgb(255,255,255)',
                  marginTop: responsiveHeight(3),
                  paddingHorizontal: responsiveWidth(2),
                  paddingVertical: responsiveHeight(0.5),
                  borderRadius: 10,
                  marginHorizontal: responsiveWidth(3),
                  elevation: 1,
                  height: responsiveHeight(4),
                  fontFamily:'Raleway-Regular'
                }}>
                {pricinObj.title}
              </Text>

              <View style={{paddingHorizontal: 20, paddingTop: 10}}>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {'$ '} {pricinObj.price}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.sub1}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.sub2}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.sub3}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.sub4}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.sub5}
                </Text>
                <Text
                  style={{
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(0.5),
                    paddingBottom: responsiveHeight(1.5),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.pdftitle}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    textDecorationLine: 'underline',
                    color: '#000',
                    paddingBottom: responsiveHeight(1.5),
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: 1,
                    marginVertical: responsiveHeight(1),
                    fontFamily:'Raleway-Regular'
                  }}>
                  {pricinObj.pdfURL}
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  marginBottom: responsiveHeight(3),
                }}>
                {/* <Button
                        onPress={()=>this.handleOrder()}
                        title="Order"
                    />*/}

                <TouchableOpacity
                  onPress={()=>this.handleOrder()}
                  style={styles.SuccessBtn}>
                  <Text style={styles.SuccessBtnText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>  
    );
   }
}

const styles = StyleSheet.create({
  scrollheight:{
    height:responsiveHeight(94),
    marginHorizontal:responsiveWidth(2),
    width:responsiveWidth(100),
    marginVertical:responsiveHeight(2)
    },

    
  SuccessBtn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor:'rgb(0,134,179)', //ff3232 - Logout // 32408b - Back
  },
  SuccessBtnText: {
    textAlign: 'center',
    fontFamily:'Raleway-Regular',
    fontSize: 15,
    color: '#fff',
    shadowOffset: { width: 0, height: 0 },
  },

});
export default connect()(Pricing);
