import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import appsFlyer from 'react-native-appsflyer'
import database from '@react-native-firebase/database'
import Orientation from 'react-native-orientation-locker'
import { receiveData, storeData } from '../controllers/StorageManager'

const WebViewScreen = () => {
    const [currentUrl, setCurrentUrl] = useState('')

    const handleNavigationStateChange = (navState) => {}

    const appsFlyerEvent = async (response) => {
        const jsonObject = JSON.parse(response)
        const eventType = jsonObject.event_type
        let map = {}

        const isFirstPurchase = await receiveData('isFirstPurchase')

        if (eventType === 'af_purchase') {
            if (isFirstPurchase == true) {
                return
            }
            map.af_currency = jsonObject.af_currency
            map.af_revenue = jsonObject.af_revenue
            map.uid = jsonObject.uid
        } else if (eventType === 'af_first_purchase') {
            map.af_currency = jsonObject.af_currency
            map.af_revenue = jsonObject.af_revenue
            map.uid = jsonObject.uid
            storeData('isFirstPurchase', false)
        } else if (eventType === 'af_complete_registration') {
            map.uid = jsonObject.uid
            map.pid = jsonObject.pid
        } else if (eventType === 'af_login') {
            map.uid = jsonObject.uid
        }

        appsFlyer
            .logEvent(eventType, map)
            .then(() => console.log('Sent event !!!!!'))
            .catch((err) => console.log(err))
            .finally(() => console.log('Endddd'))
    }

    useEffect(() => {
        database()
            .ref('/policy')
            .on(
                'value',
                (snapshot) => {
                    console.log('User data: ', snapshot.val())
                    setCurrentUrl(snapshot.val())
                },
                (err) => {
                    console.log(err)
                }
            )
    }, [])

    useEffect(() => {
        Orientation.unlockAllOrientations()
    }, [])

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <WebView
                source={{ uri: currentUrl }}
                style={{ flex: 1 }}
                onNavigationStateChange={handleNavigationStateChange}
                onMessage={(event) => {
                    appsFlyerEvent(event.nativeEvent.data)
                }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    )
}

export default WebViewScreen

const styles = StyleSheet.create({})
