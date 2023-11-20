/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import HomeScreen from './app/components/HomeScreen'

AppRegistry.registerComponent(appName, () => HomeScreen)
