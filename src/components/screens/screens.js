import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './common/InitialPageState';
import Tab1 from './common/Tab1';
import Tab2 from './common/Tab2';
import Tab3 from './common/Tab3';
import Tab4 from './common/Tab4';
import HomePage from './screens/homePage';
import AboutUs from './screens/aboutUs';
import Pricing from './screens/pricing';
import ContactUs from './screens/contactus';
import SignIn from './screens/signin';
import Register from './screens/register';
import SearchAddress from './screens/searchAddress';
import ForgotPassword from './screens/forgotPassword';
// import Maps from './screens/maps';

export default (store, Provider) =>  {
	Navigation.registerComponent('TM.WelcomeScreen', () => WelcomeScreen, store, Provider);
	Navigation.registerComponent('TM.HomeTab1', () => Tab1, store, Provider);
	Navigation.registerComponent('TM.HomeTab2', () => Tab2, store, Provider);
	Navigation.registerComponent('TM.HomeTab3', () => Tab3, store, Provider);
	Navigation.registerComponent('TM.HomeTab4', () => Tab4, store, Provider);
	Navigation.registerComponent('AL.HomePage', () => HomePage, store, Provider);
	Navigation.registerComponent('AL.AboutUs', () => AboutUs, store, Provider);
	Navigation.registerComponent('AL.Pricing', () => Pricing, store, Provider);
	Navigation.registerComponent('AL.ContactUs', () => ContactUs, store, Provider);
	Navigation.registerComponent('AL.SignIn', () => SignIn, store, Provider);
	Navigation.registerComponent('AL.Register', () => Register, store, Provider);
	Navigation.registerComponent('AL.SearchAddress', () => SearchAddress, store, Provider);
	Navigation.registerComponent('AL.ForgotPassword', () => ForgotPassword, store, Provider);
	// Navigation.registerComponent('AL.Maps', () => Maps, store, Provider);
}
