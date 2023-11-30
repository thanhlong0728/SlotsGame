/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import MainScreen from './app/components/MainScreen'
import appsFlyer from 'react-native-appsflyer'
import { receiveData, storeData } from './app/controllers/StorageManager'
import Orientation from 'react-native-orientation-locker'

appsFlyer.initSdk(
    {
        devKey: 'T9JrevUmQnMnmZmRdKC3Bn',
        isDebug: false,
        onInstallConversionDataListener: true,
        onDeepLinkListener: true
    },
    (result) => {
        console.log(result)
    },
    (error) => {
        console.error(error)
    }
)

receiveData('isFirstOpen').then((data) => {
    if (data == null || data == undefined || data == '' || data == false) {
        storeData('isFirstOpen', true)
        storeData('isFirstPurchase', true)
    }
})

AppRegistry.registerComponent(appName, () => MainScreen)
