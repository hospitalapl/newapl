import React, { Component } from 'react';
import { View,Button, Text,StyleSheet,BackHandler, Image,TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-paper';
import { responsiveWidth, responsiveHeight ,responsiveFontSize } from 'react-native-responsive-dimensions';
import { registration } from '../../../actions/index';
const Resources = require('../../../static/Resources.json');

export class Register extends Component {
  constructor(props){
     super(props)
     this.state = {
       firstName:'',
       lastName:'',
       email:'',password:'',confirmpswd:'',
       firstNameError:'',lastNameError:'',emailError:'',passwordError:'',confirmpswdError:''
     }
     this.onBackPress = this.onBackPress.bind(this);
   }
    componentWillMount(){
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress(){
      this.props.navigateHome()
    }
    handleCancel(){

    }
  async handleRegister(){
    const {firstName,lastName,email,password,confirmpswd,firstNameError,lastNameError,emailError,passwordError,
      confirmpswdError} = this.state;
      let error = false;
      const emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(firstName == ''){
        this.setState({firstNameError:Resources.errors.enterfirstname});
        error=true;
      }else{
        this.setState({firstNameError:''});
      }
      if(lastName == ''){
        this.setState({lastNameError:Resources.errors.enterlastname});
        error=true;
      }else{
        this.setState({lastNameError:''});
      }
      if(email == ''){
        this.setState({emailError:Resources.errors.enteremail});
        error=true;
      }else if(!emailreg.test(email)){
        this.setState({emailError:Resources.errors.Invalidemail});
        error=true;
      }else {
        this.setState({emailError:''});
      }
      if(password == ''){
        this.setState({passwordError:Resources.errors.enterpassword});
        error=true;
      }else{
        this.setState({passwordError:''});
      }
      if(confirmpswd == ''){
        this.setState({confirmpswdError:Resources.errors.enterconfirmpassword});
        error=true;
      }else{
        this.setState({confirmpswdError:''});
      }
      if(password!=='' && confirmpswd!==''){
        if(password !==confirmpswd){
          this.setState({confirmpswdError:Resources.errors.pwdmissmatch});
          error=true;
        }
      }
      if(!error){
        let requestdata = {
          "customer": { 
            "email": email.toLowerCase(), 
            "firstname": firstName, 
            "lastname": lastName
        },
          "password": password
        }
        console.log("requestdata==="+requestdata);
        const response = await registration(requestdata);
        if(response!==undefined && response!==null && response!==''){
          if(response.status == '200'){
            console.log(response);
          }
        }
      }
   }
   onHandleBack(){
    this.props.navigator.push({
      navigatorStyle: {navBarHidden: true},
      screen: 'AL.HomePage',
      passProps: { }
    })
  }
  render(){
    const {firstName,lastName,email,password,confirmpswd,firstNameError,lastNameError,emailError,passwordError,
      confirmpswdError} = this.state;
    return (
      <View
        style={{
          width: responsiveWidth(94),
          // marginHorizontal: responsiveWidth(3),
        }}>
        <View style={{width:responsiveWidth(100),height:responsiveHeight(6),backgroundColor:'rgb(0,134,179)',flexDirection:'row'}}>
          <TouchableOpacity style={{height:responsiveHeight(5),flexDirection:'row'}} onPress={()=>this.onHandleBack()} >
            <Image style={{marginLeft:10,width:responsiveWidth(4),height:responsiveHeight(3),marginVertical:responsiveHeight(1.5)}} source={require('../../../img/back.png')} />
            <Text style={{marginLeft:10,color:'rgb(255,255,255)',marginTop:responsiveHeight(1),fontSize:responsiveFontSize(2.5),width:responsiveWidth(75),fontFamily:'Raleway-SemiBold'}}>{"Register"}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollheight}>

        <View style={styles.container}>
          <Image
            style={{width: responsiveWidth(90), height: responsiveHeight(28)}}
            source={require('../../../img/AerialEstlogo.png')}
          />
        </View>
        <View>
        <TextInput
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:responsiveWidth(94)}}
          label="First Name"
          value={firstName}
          onChangeText={text => this.setState({firstName: text})}
          mode="outlined"
        />
        {firstNameError !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-SemiBold'}}>{firstNameError}</Text>}
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={text => this.setState({lastName: text})}
          mode="outlined"
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:responsiveWidth(94)}}
        />
        {lastNameError !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-SemiBold'}}>{lastNameError}</Text>}
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => this.setState({email: text})}
          mode="outlined"
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:responsiveWidth(94)}}
        />
        {emailError !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-SemiBold'}}>{emailError}</Text>}
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => this.setState({password: text})}
          mode="outlined"
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:responsiveWidth(94)}}
        />
        {passwordError !== '' && <Text style={{marginLeft:10,color:'#b03a2e',fontFamily:'Raleway-SemiBold'}}>{passwordError}</Text>}
        <TextInput
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:responsiveWidth(94)}}
          label="Confirm Password"
          value={confirmpswd}
          onChangeText={text => this.setState({confirmpswd: text})}
          mode="outlined"
        />
        {confirmpswdError !== '' && <Text style={{marginLeft:10,color:'#b03a2e',fontFamily:'Raleway-SemiBold'}}>{confirmpswdError}</Text>}
        <View style={{flexDirection: 'row', width: responsiveWidth(99),marginBottom:responsiveHeight(8)}}>
          <View
            style={{
              width: responsiveWidth(46.5),
              backgroundColor: 'white',
              marginRight: responsiveWidth(1),
            }}>
            {/* <Button
              onPress={() => this.handleCancel()}
              title="Cancel"
              color="rgb(199,199,199)"
            /> */}
            <TouchableOpacity
              onPress={() => this.handleCancel()}
              style={styles.CancelBtn}>
              <Text style={styles.CancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: responsiveWidth(46.5)}}>
            {/* <Button
                onPress={()=>this.handleRegister()}
                title="Register"
                color="#34B200"
            /> */}

            <TouchableOpacity
                onPress={()=>this.handleRegister()}
              style={styles.SuccessBtn}>
              <Text style={styles.SuccessBtnText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop:responsiveHeight(3),
    height:responsiveHeight(25),
    backgroundColor: 'transparent',
    margin:10
  },
  scrollheight:{
    height:responsiveHeight(94),
    width:responsiveWidth(100),
    // padding:10
},
  SuccessBtn: {
    width: '100%',
    height: 50,margin:10,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor:'#34B200', //ff3232 - Logout // 32408b - Back
  },
  SuccessBtnText: {
    textAlign: 'center',
    fontFamily:'Raleway-SemiBold',
    fontSize: 15,
    color: '#fff',
    shadowOffset: { width: 0, height: 0 },
  },


  
  CancelBtn: {
    width: '100%',
    height: 50,margin:10,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor:'rgb(199,199,199)', //ff3232 - Logout // 32408b - Back
  },
  CancelBtnText: {
    textAlign: 'center',
    fontFamily:'Raleway-SemiBold',
    fontSize: 15,
    color: '#000',
    shadowOffset: { width: 0, height: 0 },
  },

});

export default connect()(Register);
