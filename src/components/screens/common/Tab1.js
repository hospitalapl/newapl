import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {connect} from 'react-redux';


export class Tab1 extends Component {
  constructor(props){
     super(props)
     this.state = {}
   }
    
  render(){
    return(
        <View> 
          <Text>Tab1</Text>
        </View>
    );
   }
}

export default connect()(Tab1);
