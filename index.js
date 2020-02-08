/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { YellowBox,Text } from 'react-native';
console.disableYellowBox=true;
import App from './src/app';
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling=false;
const app = new App();