import React, { Component } from 'react';
import { View, Text,StyleSheet,Linking,Button,ScrollView,BackHandler, Image,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth ,responsiveFontSize } from 'react-native-responsive-dimensions';

const Resources = require('../../../static/Resources.json');

export class ContactUs extends Component {
  constructor(props){
     super(props)
     this.state = {
       firstName:'',lastName:'',email:'',
       company:'',phone:'',comment:'',
       firstNameError:'',lastNameError:'',emailError:'',companyError:'',phoneError:'',
       commentError:''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.onBackPress = this.onBackPress.bind(this);
   }
   componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress(){
    this.props.navigateHome()
  }
  onHandleBack(){
    this.props.navigator.push({
      navigatorStyle: {navBarHidden: true},
      screen: 'AL.HomePage',
      passProps: { }
    })
  }
  handleSubmit(){
    const {firstName,lastName,email,company,phone,comment,firstNameError,lastNameError,emailError,companyError,phoneError,commentError} = this.state;
    if(firstName == ''){
      this.setState({firstNameError:Resources.errors.enterfirstname})
    }else{ this.setState({firstNameError:''}) }
    if(lastName == ''){
      this.setState({lastNameError:Resources.errors.enterlastname})
    }else{ this.setState({lastNameError:''}) }
    if(email == ''){
      this.setState({emailError:Resources.errors.enteremail})
    }else{ this.setState({emailError:''}) }
    if(company == ''){
      this.setState({companyError:Resources.errors.entercompany})
    }else{ this.setState({companyError:''}) }
    if(phone == ''){
      this.setState({phoneError:Resources.errors.enterphone})
    }else{ this.setState({phoneError:''}) }
    if(comment == ''){
      this.setState({commentError:Resources.errors.entercomment})
    }else{ this.setState({commentError:''}) }
  }
  render(){
    const {firstName,lastName,email,company,phone,comment,firstNameError,lastNameError,emailError,companyError,phoneError,commentError} = this.state;
    return(
      <View>
        <View style={{width:responsiveWidth(100),height:responsiveHeight(6),backgroundColor:'rgb(0,134,179)',flexDirection:'row'}}>
          <TouchableOpacity style={{height:responsiveHeight(5),flexDirection:'row'}} onPress={()=>this.onHandleBack()} >
            <Image style={{marginLeft:10,width:responsiveWidth(4),height:responsiveHeight(3),marginVertical:responsiveHeight(1.5)}} source={require('../../../img/back.png')} />
            <Text style={{marginLeft:10,color:'rgb(255,255,255)',marginVertical:responsiveHeight(1),fontSize:responsiveFontSize(2.5),width:responsiveWidth(75),fontFamily:'Raleway-SemiBold'}}>{"Contact Us"}</Text>
          </TouchableOpacity>
        </View>
      <ScrollView style={styles.scrollheight}>
          <View style={{borderColor:'rgba(0,0,0,0.1)',borderWidth:1,padding:15,marginTop:responsiveHeight(4),borderRadius:4}}>
              <Text style={{fontSize:responsiveFontSize(1.8),alignItems: 'stretch',color:'rgb(0,0,0)',fontFamily:'Raleway-SemiBold'}}>{Resources.contactUsPage.email_title}</Text>
              <Text style={{fontSize:responsiveFontSize(1.8),textDecorationLine:'underline',color:'rgb(0,64,255)',fontFamily:'Raleway-Regular'}}>{"info@aerialestimation.com"}</Text>
              <Text style={{fontSize:responsiveFontSize(1.8),textDecorationLine:'underline',color:'rgb(0,64,255)',fontFamily:'Raleway-Regular'}}>{"orders@aerialestimation.com"}</Text>
                <Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgb(0,0,0)',fontFamily:'Raleway-SemiBold'}}>{Resources.contactUsPage.phone_label}</Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgba(0,0,0,0.5)',fontFamily:'Raleway-Regular'}}>{"424-666-2345"}</Text>
                </Text>
                <Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgb(0,0,0)',fontFamily:'Raleway-SemiBold'}}>{Resources.contactUsPage.Fax_label}</Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgba(0,0,0,0.5)',fontFamily:'Raleway-Regular'}}>{"424-204-0720"}</Text>
                </Text>
                <Text style={{flexDirection:'row',flexWrap:'wrap'}}>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgb(0,0,0)',lineHeight:23,fontFamily:'Raleway-SemiBold'}}>{Resources.contactUsPage.working_hour_label}</Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgb(0,0,0)',lineHeight:23,fontFamily:'Raleway-SemiBold'}}>{"Weekdays "}</Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgba(0,0,0,0.5)',lineHeight:23,fontFamily:'Raleway-Regular'}}>{"Mon - Fri 8:00 AM - 6:00 PM CST"}</Text>
                </Text>
                <Text>
                  <Text style={{fontFamily:'Raleway-SemiBold'}}>{"Saturday:"}</Text>
                  <Text style={{fontSize:responsiveFontSize(1.8),color:'rgba(0,0,0,0.5)',fontFamily:'Raleway-Regular'}}>{"8:00 AM - 12:00 PM CST"}</Text>
                </Text>
              <Text style={{fontSize:responsiveFontSize(1.9),color:'rgb(0,0,0)',fontFamily:'Raleway-SemiBold'}} onPress={()=>{ Linking.openURL(Resources.common.aerialestimationurl)}}>{Resources.common.aerialestimationurl}</Text>
          </View>
          <View style={{marginBottom:responsiveHeight(8)}}>
            <Text style={{fontSize:responsiveFontSize(2.2),color:'rgb(0,0,0)',fontFamily:'Raleway-SemiBold',marginVertical:responsiveHeight(1.5)}}>{Resources.contactUsPage.contact_title}</Text>
            <TextInput
              label='First Name'
              value={firstName}
              onChangeText={text => this.setState({ firstName:text })}
              mode='outlined'
            />
            {firstNameError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{firstNameError}</Text>}
            <TextInput
              label='Last Name'
              value={lastName}
              onChangeText={text => this.setState({ lastName:text })}
              mode='outlined'
            />
            {lastNameError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{lastNameError}</Text>}
            <TextInput
              label='Email'
              value={email}
              onChangeText={text => this.setState({ email:text })}
              mode='outlined'
            />
            {emailError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{emailError}</Text>}
            <TextInput
              label='Company'
              value={company}
              onChangeText={text => this.setState({ company:text })}
              mode='outlined'
            />
            {companyError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{companyError}</Text>}
            <TextInput
              label='Phone'
              value={phone}
              onChangeText={text => this.setState({ phone:text })}
              mode='outlined'
            />
            {phoneError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{phoneError}</Text>}
            <TextInput style={{marginBottom:responsiveHeight(3)}}
              label='Comment'
              value={comment}
              onChangeText={text => this.setState({ comment:text })}
              mode='outlined'
            />
            {commentError!=='' && <Text style={{fontFamily:'Raleway-Regular'}}>{commentError}</Text>}
            <TouchableOpacity style={{height:responsiveHeight(9)}} onPress={()=>this.handleSubmit()}>
              <Text style={{color:'#fff',
                            height:responsiveHeight(9),
                            fontSize:responsiveFontSize(2),
                            backgroundColor:'rgb(0,134,179)',
                            borderColor:'rgb(0,134,179)',
                            borderWidth:1,
                            borderRadius:5,
                            textAlign:'center',paddingVertical:responsiveHeight(3)}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
   }
}
const styles = StyleSheet.create({
  scrollheight:{
    height:responsiveHeight(94),
    marginHorizontal:responsiveWidth(3),
    width:responsiveWidth(94),
    marginBottom:50
    }
});
export default connect()(ContactUs);
