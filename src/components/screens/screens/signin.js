import React, { Component } from 'react';
import { View,Button, Text,StyleSheet,BackHandler,Image,TouchableOpacity,Modal,ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-paper';
import { resetpassword,login } from '../../../actions/index';
import { responsiveWidth, responsiveHeight ,responsiveFontSize } from 'react-native-responsive-dimensions';
const Resources = require('../../../static/Resources.json');

export class SignIn extends Component {
  constructor(props){
     super(props)
     this.state = {
       email:'',
       password:'',
       emailError:'',
       passwordError:'',
       modalVisible: false,
       frgtemail:'',frgtsuccess:''
     }
     this.navigateForgotpswd = this.navigateForgotpswd.bind(this);
     this.onBackPress = this.onBackPress.bind(this);
   }

  
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress(){
    this.props.navigateHome()
  }
  navigateForgotpswd(){
    this.props.navigator.push({
      navigatorStyle: {navBarHidden: true},
      screen: 'AL.ForgotPassword',
      passProps: { }
    })
   }
  async handleLogin(){
    const {email,password} = this.state;
    let loginerror = false;
    if(email == ''){
      loginerror = true;
      this.setState({emailError:Resources.errors.enteremail});
    }else {
      loginerror = false;
      this.setState({emailError:''});
    }
    if(password == ''){
      loginerror = true;
      this.setState({passwordError:Resources.errors.enterpassword});
    }else{
      loginerror = false;
      this.setState({passwordError:''});
    }
    if(!loginerror){
      let requestdata = {
        "username": email.toLowerCase(),
        "password": password
      }
      console.log(requestdata);
      const response = await login(requestdata);
      console.log(response);
      if(response!==undefined && response!==null && response!==''){
        if(response.status == '200'){
          this.onHandleBack();
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
  async handleResetPswd(){
    const {frgtemail,frgtsuccess} = this.state;
    let requestdata = {
      "email": frgtemail.toLowerCase(),
      "template": "email_reset",
      "websiteId": 1
    }
    const response = await resetpassword(requestdata)
    if(response!==undefined && response!==null && response!==''){
      if(response.status == '200'){
        this.setState({frgtsuccess:'We have sent you a reset link on your email address'});
        this.timeoutHandle = setTimeout(()=>{
          this.setState({frgtsuccess:''})
        }, 2000);
      }else{
        this.setState({frgtsuccess:'Something went wrong!! Please try again'});
        this.timeoutHandle = setTimeout(()=>{
          this.setState({frgtsuccess:''})
        }, 2000);
      }
    }
  }
  render(){
    const {email,frgtemail,password,emailError,passwordError,frgtsuccess} = this.state;
    return (
      <View
        style={{
          width: responsiveWidth(94),
          // marginHorizontal: responsiveWidth(3),
          // marginTop: '30%',
        }}>
        <View style={{width:responsiveWidth(100),height:responsiveHeight(6),backgroundColor:'rgb(0,134,179)',flexDirection:'row'}}>
          <TouchableOpacity style={{height:responsiveHeight(5),flexDirection:'row'}} onPress={()=>this.onHandleBack()}>
            <Image style={{marginLeft:10,width:responsiveWidth(4),height:responsiveHeight(3),marginVertical:responsiveHeight(1.5)}} source={require('../../../img/back.png')} />
            <Text style={{marginLeft:10,color:'rgb(255,255,255)',marginTop:responsiveHeight(1),fontSize:responsiveFontSize(2.5),width:responsiveWidth(75),fontFamily:'Raleway-SemiBold'}}>{"Sign In"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image
            style={{width: responsiveWidth(94), height: responsiveHeight(28)}}
            source={require('../../../img/AerialEstlogo.png')}
          />
        </View>
        <TextInput
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:'100%'}}
          label="Email"
          value={email}
          onChangeText={text => this.setState({email: text})}
          mode="outlined"
        />
        {emailError !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-Regular'}}>{emailError}</Text>}
        <TextInput
          style={{marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,width:'100%'}}
          label="Password"
          value={password}
          onChangeText={text => this.setState({password: text})}
          mode="outlined"
        />
        {passwordError !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-Regular'}}>{passwordError}</Text>}
        {/* <Button
          style={{
            backgroundColor: 'rgb(0,134,179)',
            marginVertical: responsiveHeight(3),
          }}
          onPress={() => this.handleLogin()}
          title="Sign In"
        /> */}

        <TouchableOpacity
          onPress={() => this.handleLogin()}
          style={styles.SuccessBtn}>
          <Text style={styles.SuccessBtnText}>Sign In</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: responsiveFontSize(1.8),
            textDecorationLine: 'underline',
            color: 'rgb(0,64,255)',
            textAlign: 'center',
            marginTop: responsiveHeight(2),
            fontFamily:'Raleway-Regular'
          }}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          {Resources.SignInPage.forgotpswd}
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.ModalCard}>
            <View style={styles.firstView}>
              <View style={styles.secondView}>
                <Text style={styles.cardText}>Forgot Password</Text>
              </View>
              <View style={styles.CancelIconMainView}>
                <View style={styles.CancelIconSubView}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={styles.modalcrossimageview}>
                    <Image
                      style={styles.closeiconStyle}
                      source={'../../img/close_cancel.png'}
                    />

                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{marginBottom:responsiveHeight(5),width:responsiveWidth(100)}}>
              <View style={{marginHorizontal: responsiveWidth(3),marginBottom:'2%'}}>
                <TextInput
                  mode={'outlined'}
                  value={this.state.frgtemail}
                  label="Enter email"
                  placeholder=""
                  onChangeText={text => this.setState({ frgtemail:text })}
                  underlineColorAndroid="transparent"
                  style={styles.TextInputPlaceholder}
                />
              </View>
              {frgtsuccess !== '' && <Text style={{marginLeft:10, color:'#b03a2e',fontFamily:'Raleway-Regular'}}>{frgtsuccess}</Text>}
              <View style={styles.ForgotBtn}>
                <TouchableOpacity
                  onPress={() => this.handleResetPswd()}
                  style={styles.SuccessBtn}>
                  <Text style={styles.SuccessBtnText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  },
  
  SuccessBtn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor:'rgb(0,134,179)', //ff3232 - Logout // 32408b - Back
    marginTop: responsiveHeight(1),marginLeft:10,marginRight:10,
  },
  SuccessBtnText: {
    textAlign: 'center',
    fontFamily:'Raleway-Regular',
    fontSize: 15,
    color: '#fff',
    shadowOffset: { width: 0, height: 0 },
  },
  
  ModalBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5);',
  },

  ModalCard: {
    elevation: 50,
    backgroundColor: '#fff',
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  ForgotBtn:{
    width:responsiveWidth(94),
  },
  cardView: {
    elevation: 50,
    backgroundColor: "#fff",
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  firstView: {
    width: "100%",
    flexDirection: "row",
  },
  secondView: { width: "90%", justifyContent: "center", alignItems: "center" },
  cardText: {
    fontSize: 18,
    fontFamily:'Raleway-SemiBold',
    color: "#000",
    padding: 10,
    marginStart: "2%"
  },
  crossIconStyle: { width: 30, height: 30, marginTop: "5%", padding: 10 },
  CancelIconMainView: { width: "10%", padding: 5 },
  CancelIconSubView: { marginRight: "5%" },
  closeiconStyle: {
    width: 30,
    height: 30,
    marginTop: "5%"
  },
  
  modalcrossimageview: {
    marginLeft: "auto",
    marginRight: "5%",
  },
});


export default connect()(SignIn);
