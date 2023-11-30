import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as RNLocalize from 'react-native-localize'
import axios from 'axios'
import DeviceCountry, {
    TYPE_TELEPHONY,
    TYPE_CONFIGURATION,
    TYPE_ANY
} from 'react-native-device-country'
import HomeScreen from './HomeScreen'
import WebViewScreen from './WebViewScreen'

const MainScreen = () => {
    const [isInBrazil, setIsInBrazil] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const locales = RNLocalize.getLocales()
        const currentLocale = locales[0]?.languageCode

        if (
            currentLocale.toLowerCase().includes('br') ||
            currentLocale.toLowerCase().includes('pt')
        ) {
            // DeviceCountry.getCountryCode(TYPE_TELEPHONY)
            //     .then((result) => {
            //         console.log('simmmmmmm')
            //         console.log(result)
            //         if (result?.code.toLowerCase() == 'br' || result?.code.toLowerCase() == 'pt') {
            // if (result.code.toLowerCase() == 'vn') {
            axios
                .get('https://ipinfo.io/json')
                .then((res) => {
                    console.log(res.data?.ip)
                    console.log(res.data?.country)

                    if (res.data?.country?.toLowerCase().includes('br')) {
                        setIsInBrazil(true)
                        setIsLoading(false)
                    } else {
                        setIsInBrazil(false)
                        setIsLoading(false)
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })
            //     }
            // })
            // .catch((err) => {
            //     console.log(err)
            //     setIsLoading(false)
            // })
        } else {
            setIsLoading(false)
        }
    }, [])

    if (!isLoading) {
        if (isInBrazil) {
            return <WebViewScreen />
        } else {
            return <HomeScreen />
        }
    }
}

export default MainScreen

const styles = StyleSheet.create({})
