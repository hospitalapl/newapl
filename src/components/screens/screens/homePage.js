import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HTML from 'react-native-render-html';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Animatable from 'react-native-animatable';
import { getProfileDetails, getHomedata } from '../../../actions/index';
let FirstItem = 0;
const Resources = require('../../../static/Resources.json');

const SliderWidth = Dimensions.get('screen').width;
const ItemWidth = Dimensions.get('screen').width;
const Items = ['<div style="width:100%"><img src="https://i.ibb.co/kSks7PN/1.jpg" alt="aerialest" style="width: 100%;"></div>',
    '<div style="width:100%"><img src="https://i.ibb.co/1XvRyvq/2.jpg" alt="aerialest" style="width: 100%;"></div>',
    '<div style="width:100%"><img src="https://i.ibb.co/MV5cHHq/3.jpg" alt="aerialest" style="width: 100%;"></div>',
];

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [],
            activeTab: 0,
            showMenu: false,
            homedata: '',
            animationtype: 'fadeInLeft',
            page: props.page !== undefined && props.page !== null && props.page !== '' ? props.page : 'home'
        }
        this._renderItem = this._renderItem.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.navigateHome = this.navigateHome.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.getHomePageData();
        this.timeoutHandle = setTimeout(() => {
            const authenticationCookie = AsyncStorage.getItem("AEsession").then((value) => {
                console.log(value)
                if (value != '' && value != null) {
                    this.getProfile();
                }
            })
        }, 2800);
    }
    async getHomePageData() {
        console.log("calll-1");
        const response = await getHomedata();
        console.log("home response===" + response);
        if (response !== undefined && response !== null && response !== '') {
            if (response.status == '200') {
                let data = "hai";
                this.setState({ homedata: data });
            }
        }
    }
    async getProfile() {
        const resp = await getProfileDetails();
        console.log(resp)
    }
    navigateHome() {
        this.setState({ page: 'home', showMenu: false })
    }
    _renderItem({ item }) {
        return (
            <View style={{
                flex: 1,
                width: responsiveWidth(100),
                height: responsiveHeight(94),
                alignItems: 'center',
                backgroundColor: 'transparent',
            }}>
                <HTML html={item} />
            </View>
        );
    }
    closeMenu(page) {
        this.setState({ animationtype: 'fadeOutLeft', page: page, showMenu: false });
        //   this.timeoutHandle = setTimeout(()=>{
        //     this.setState({showMenu:false});
        //   }, 500);
    }

    showMenuItems() {
        const { showMenu, animationtype } = this.state;
        if (showMenu) {
            return (
                <View style={{ height: responsiveHeight(100), backgroundColor: 'white', borderRightColor: 'rgba(0,0,0,0.4)', borderRightWidth: 1 }}>
                    <View>
                        <Animatable.Text style={{
                            color: 'rgb(0,0,0)',
                            fontSize: responsiveFontSize(3),
                            height: responsiveHeight(6),
                            // backgroundColor:'rgba(0,134,179,0.5)',
                            paddingVertical: responsiveHeight(1),
                            paddingLeft: responsiveWidth(2),
                            borderBottomColor: 'rgba(0,0,0,0.4)',
                            borderBottomWidth: 1,
                            width: '80%',
                            fontFamily: 'Raleway-SemiBold',
                        }} animation={animationtype} iterationCount={1} direction="alternate">{Resources.menuItems.Header}</Animatable.Text>
                        <TouchableOpacity onPress={() => this.setState({ showMenu: false })} style={{ marginTop: -30 }}>
                            <Image style={{ width: responsiveWidth(3), height: responsiveHeight(3), alignSelf: 'flex-end', marginRight: '4%' }} source={require('../../../img/cancel.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/Homemenu.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('home')}>{Resources.menuItems.home}</Animatable.Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/AboutUs.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('aboutus')}>{Resources.menuItems.about_us}</Animatable.Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/Pricing.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('pricing')}>{Resources.menuItems.pricing}</Animatable.Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/ContactUs.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('contactus')}>{Resources.menuItems.contact_us}</Animatable.Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(4), marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/Signin.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('signin')}>{Resources.menuItems.signin}</Animatable.Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                        {animationtype == 'fadeInLeft' && <Image style={{ width: responsiveWidth(3), height: responsiveHeight(2), marginRight: 5, marginLeft: 8 }} source={require('../../../img/Register.png')} />}
                        <Animatable.Text style={{ color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2), width: responsiveWidth(75), marginVertical: responsiveHeight(1) }} animation={animationtype} iterationCount={1} direction="alternate" onPress={() => this.closeMenu('register')}>{Resources.menuItems.register}</Animatable.Text>
                    </View>
                </View>
            );
        }
    }
    Data() {
        const { homedata } = this.state;
        console.log("homedata:::::" + homedata)
        return (
            <View>
                {/* <HTML html={homedata}/> */}
            </View>
        )
    }
    renderHome() {
        return (
            <ScrollView style={styles.scrollheight}>
                <View style={styles.container}>
                    <Carousel
                        data={Items}
                        autoplay={true}
                        onSnapToItem={i => this.setState({ activeTab: i })}
                        autoplayDelay={500}
                        firstItem={FirstItem}
                        itemWidth={ItemWidth}
                        sliderWidth={330}
                        activeSlideAlignment='center'
                        containerCustomStyle={{ flex: 1 }}
                        slideStyle={{ flex: 1 }}
                        renderItem={this._renderItem}
                    />
                </View>
                <View style={styles.carouseltext}>
                    {this.Data()}
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold' }}>{Resources.homePage.Aerial_header}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_desc1}</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', marginVertical: responsiveHeight(1.5) }}>{Resources.homePage.Aerial_sub1}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub1_desc}</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', marginTop: responsiveHeight(1.5) }}>{Resources.homePage.Aerial_sub2}</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: 'rgb(0,0,0)', fontFamily: 'Raleway-SemiBold', marginBottom: responsiveHeight(1.5) }}>{Resources.homePage.Aerial_sub2_feature_title}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature1}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature2}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature3}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature4}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature5}</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.9), alignItems: 'stretch', color: 'rgba(0,0,0,0.6)', lineHeight: 23, fontFamily: 'Raleway-Regular' }}>{Resources.homePage.Aerial_sub2_feature6}</Text>
                </View>
            </ScrollView>
        );
    }
    renderAboutUs() {
        this.props.navigator.push({
            navigatorStyle: { navBarHidden: true },
            screen: 'AL.AboutUs',
            passProps: {
                navigateHome: this.navigateHome
            }
        })
    }
    renderPricing() {
        this.props.navigator.push({
            navigatorStyle: { navBarHidden: true },
            screen: 'AL.Pricing',
            passProps: {
                navigateHome: this.navigateHome
            }
        })
    }
    renderContactUs() {
        this.props.navigator.push({
            navigatorStyle: { navBarHidden: true },
            screen: 'AL.ContactUs',
            passProps: {
                navigateHome: this.navigateHome
            }
        })
    }
    renderSignIn() {
        this.props.navigator.push({
            navigatorStyle: { navBarHidden: true },
            screen: 'AL.SignIn',
            passProps: {
                navigateHome: this.navigateHome
            }
        })
    }
    renderRegister() {
        this.props.navigator.push({
            navigatorStyle: { navBarHidden: true },
            screen: 'AL.Register',
            passProps: {
                navigateHome: this.navigateHome
            }
        })
    }
    renderPage() {
        const { page } = this.state;
        if (page !== '' && page == 'home') {
            return this.renderHome();
        } else if (page !== '' && page == 'aboutus') {
            return this.renderAboutUs();
        } else if (page !== '' && page == 'pricing') {
            return this.renderPricing();
        } else if (page !== '' && page == 'contactus') {
            return this.renderContactUs();
        } else if (page !== '' && page == 'signin') {
            return this.renderSignIn();
        } else if (page !== '' && page == 'register') {
            return this.renderRegister();
        }
    }
    render() {
        return (
            <View>
                <View>
                    <View style={{ width: responsiveWidth(100), height: responsiveHeight(6), flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: responsiveWidth(5), marginLeft: responsiveWidth(3), marginVertical: responsiveHeight(1) }} onPress={() => this.setState({ animationtype: 'fadeInLeft', showMenu: true })}>
                            <Image style={{ width: responsiveWidth(4), height: responsiveHeight(4) }} source={require('../../../img/menuimg.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#000', fontFamily: 'Raleway-SemiBold', fontSize: responsiveFontSize(2.5), textAlignVertical: 'center', width: responsiveWidth(75), fontFamily: 'SFUIText-Regular', marginVertical: responsiveHeight(1) }}>{"Home"}</Text>
                        <TouchableOpacity style={{ textAlign: 'right' }}>
                            <Text style={styles.button_Bclick}>{"Order"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'relative' }}>
                        {this.renderPage()}
                    </View>
                </View>
                <View style={{ position: 'absolute', width: responsiveWidth(70) }}>
                    {this.showMenuItems()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(1),
        height: responsiveHeight(30),
        backgroundColor: 'transparent',
        width: responsiveWidth(94),
        //   marginHorizontal:responsiveWidth(3)
        //   backgroundColor:'black'
    },
    scrollheight: {
        height: responsiveHeight(94),
        paddingBottom: responsiveHeight(5),
        marginHorizontal: responsiveWidth(3),
        width: responsiveWidth(94)
    },
    carouseltext: {
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(5)
    },
    button_Bclick: {
        width: responsiveWidth(10),
        textAlign: 'center',
        color: 'rgb(0,0,0)',
        fontSize: responsiveFontSize(1.5),
        borderRadius: 4,
        paddingTop: responsiveHeight(1),
        paddingBottom: responsiveHeight(1),
        marginVertical: responsiveHeight(0.7),
        fontFamily: 'Raleway-SemiBold',
        backgroundColor: 'rgb(255,255,255)',
        borderWidth: 0.5
    },
});
const mapStateToProps = (state) => {
    console.log('state', state)
}

export default connect(mapStateToProps, null)(HomePage);
