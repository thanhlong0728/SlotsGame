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
        devKey: '', // ozBRTZ6ZLtaRb5UFwdymYA
        isDebug: false,
        // appId: '41*****44',
        onInstallConversionDataListener: true, //Optional
        onDeepLinkListener: true //Optional
        // timeToWaitForATTUserAuthorization: 10 //for iOS 14.5
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
