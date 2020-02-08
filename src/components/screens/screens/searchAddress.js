import React, { Component } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-paper';
// import Maps from './maps';
const Resources = require('../../../static/Resources.json');

export class SearchAddress extends Component {
  constructor(props){
     super(props)
     this.state = {
         location:'',
         latitude:'',longitude:''
     }
     this.handlelocationSearch = this.handlelocationSearch.bind(this);
    //  this.handlelatlongSearch = this.handlelatlongSearch.bind(this);
   }
   handlelocationSearch(){ }
   
//    handlelatlongSearch(){ }

    render(){
      const {location,latitude,longitude} = this.state;
        return(
            <View> 
                <Text>{Resources.searchAddress.newordertitle}</Text>
                <Text onPress={()=>{ Linking.openURL("www.google.com")}}>Video</Text>
                <TextInput
                    label='Enter a location'
                    value={location}
                    onChangeText={text => this.setState({ location:text })}
                />
                <Button
                    onPress={()=>this.handlelocationSearch()}
                    title="Search"
                    color="#4863A0"
                />
                {/* <Maps /> */}
                {/* <TextInput
                    label='Enter Latitude'
                    value={latitude}
                    onChangeText={text => this.setState({ latitude:text })}
                />
                <TextInput
                    label='Enter Longitude'
                    value={longitude}
                    onChangeText={text => this.setState({ longitude:text })}
                />
                <Button
                    onPress={()=>this.handlelatlongSearch()}
                    title="Search"
                    color="#4863A0"
                /> */}
            </View>
        );
   }
}

export default connect()(SearchAddress);
