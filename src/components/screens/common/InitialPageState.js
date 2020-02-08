import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import * as  appActions from '../../../actions/index';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export class InitialPageState extends Component {
  constructor(props){
     super(props)
     this.state = {
      isSplashLoad:true
     }
   }
    componentWillMount(){
      this.timeoutHandle = setTimeout(()=>{
          this.setState({isSplashLoad:false})
      }, 2000);
    }
    renderHomePage(){
      this.props.dispatch(appActions.HomePage());
    }
  render(){
    
    const {isSplashLoad} = this.state;
    if(isSplashLoad){
      return(
        <View style={{textAlign:'center',alignItems:'center',height:responsiveHeight(100),justifyContent:'center'}}>
            <Text style={{fontFamily:'Raleway-SemiBold', fontSize:responsiveFontSize(7)}}>Aerial</Text>
            <Text style={{fontFamily:'Raleway-SemiBold', fontSize:responsiveFontSize(7)}}>Estimation</Text>
        </View>
    );
    }else{
      return(
        <View>{this.renderHomePage()}</View>
      )
    }
   }
}

export default connect()(InitialPageState);
