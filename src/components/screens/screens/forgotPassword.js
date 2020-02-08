import React, { Component } from 'react';
import { View,Button, Text,StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-paper';
import { responsiveWidth, responsiveHeight ,responsiveFontSize } from 'react-native-responsive-dimensions';
const Resources = require('../../../static/Resources.json');

export class ForgotPassword extends Component {
  constructor(props){
     super(props)
     this.state = {
         email:'',
         emailError:''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleSubmit(){
    const {email} = this.state;
    if(email == ''){
        this.setState({emailError:Resources.errors.enteremail});
    }else{
        this.setState({emailError:''});
    }
   }
    render(){
      const {email,emailError} = this.state;
        return(
            <View style={{width:responsiveWidth(94),marginHorizontal:responsiveWidth(3),marginTop:responsiveHeight(3)}}>
                <TextInput style={{marginBottom:responsiveHeight(4)}}
                    label='Email'
                    value={email}
                    onChangeText={text => this.setState({ email:text })}
                />
                {emailError!=='' && <Text>{emailError}</Text>}
                <View style={{marginButton:responsiveHeight(3)}}>
                    <Button 
                        onPress={()=>this.handleSubmit()}
                        title="Submit"
                    />
                </View>
            </View>
        );
   }
}

export default connect()(ForgotPassword);
