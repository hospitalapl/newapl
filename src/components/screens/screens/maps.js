// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import React, { Component } from 'react';
// import { View, Text,StyleSheet,Button } from 'react-native';
// import {connect} from 'react-redux';
// import { TextInput } from 'react-native-paper';
// import { responsiveWidth, responsiveHeight ,responsiveFontSize } from 'react-native-responsive-dimensions';

// export class Maps extends Component {
//   constructor(props){
//      super(props)
//      this.state = {
//         latitude:"",
//         longitude:"",
//         latitudeError:"",
//         longitudeError:""
//      }
//    }
//    handleSearch(){
//     const { latitude,longitude } = this.state;
//     let isError=false;
//     if(latitude ==''){
//         this.setState({latitudeError:"Please enter latitude coordinates"});
//         isError = true;
//     }else{
//         this.setState({latitudeError:""});
//         isError=false;
//     }
//     if(longitude ==''){
//         this.setState({longitudeError:"Please enter longitude coordinates"});
//         isError = true;
//     }else{
//         this.setState({longitudeError:""});
//         isError=false;
//     }
//     if(!isError){
//     }
//    }
    
//   render(){
//       const {latitude,latitudeError,longitude,longitudeError} = this.state;
//     return(
//         <View>
//             <View style={styles.container}>
//                 <MapView
//                     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                     style={styles.map}
//                     region={{
//                         latitude:13.083680300000001 ,
//                         longitude: 77.6403138,
//                         latitudeDelta: 0.015,
//                         longitudeDelta: 0.0121,
//                     }}
//                 >
//                 </MapView>
//                 </View>
//                 <View style={{width:responsiveWidth(50),marginTop:responsiveHeight(3)}}>
//                     <TextInput
//                         label='latitude'
//                         value={latitude}
//                         onChangeText={text => this.setState({ latitude:text })}
//                     />
//                         {latitudeError!=='' && <Text>{latitudeError}</Text>}
//                     <TextInput
//                         label='longitude'
//                         value={longitude}
//                         onChangeText={text => this.setState({ longitude:text })}
//                     />
//                         {longitudeError!=='' && <Text>{longitudeError}</Text>}
//                         <Button style={{backgroundColor:'rgb(0,134,179)',marginVertical:responsiveHeight(3)}}
//                         onPress={()=>this.handleSearch()}
//                         title="Search"
//                         />
                
//             </View>
//         </View>
//     );
//    }
// }

// export default connect()(Maps);

// const styles = StyleSheet.create({
//     container: {
//       height: 400,
//       width: 400,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });