import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as RNLocalize from 'react-native-localize'
import WebViewScreen from './WebViewScreen'
import HomeScreen from './HomeScreen'
import axios from 'axios'
import { receiveData, storeData } from '../controllers/StorageManager'
import WelcomeScreen from './WelcomeScreen'
import DeviceCountry, {
    TYPE_TELEPHONY,
    TYPE_CONFIGURATION,
    TYPE_ANY
} from 'react-native-device-country'

const MainScreen = () => {
    const [isInBrazil, setIsInBrazil] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const locales = RNLocalize.getLocales()
        const currentLocale = locales[0]?.languageCode

        console.log('languageeeeee')
        console.log(currentLocale)

        if (
            currentLocale.toLowerCase().includes('br') ||
            currentLocale.toLowerCase().includes('pt')
        ) {
            DeviceCountry.getCountryCode(TYPE_TELEPHONY)
                .then((result) => {
                    console.log('simmmmmmm')
                    console.log(result)
                    if (result?.code.toLowerCase() == 'br' || result?.code.toLowerCase() == 'pt') {
                        axios
                            .get('https://ipinfo.io/json')
                            .then((res) => {
                                console.log(res.data?.ip)
                                if (res.data?.ip) {
                                    const ip = res?.data?.ip
                                    console.log('IPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
                                    console.log(ip)
                                    // Alert.alert(ip)
                                    const accessKey = 'b5b3af45-4155-4be0-8276-0b2d36f50a67'
                                    const url =
                                        'http://apiip.net/api/check?ip=' +
                                        ip +
                                        '&accessKey=' +
                                        accessKey

                                    axios
                                        .get(url)
                                        .then((response) => {
                                            console.log('IPPPPPPP')
                                            console.log(response.data?.countryCode)
                                            // Alert.alert(response.data?.countryCode)
                                            if (
                                                response.data?.countryCode
                                                    ?.toLowerCase()
                                                    .includes('br')
                                            ) {
                                                setIsInBrazil(true)
                                                setIsLoading(false)
                                            } else {
                                                setIsInBrazil(false)
                                                setIsLoading(false)
                                            }
                                        })
                                        .catch((error) => {
                                            console.error('Error fetching IP data:', error)
                                            // Alert.alert(error.message)
                                            setIsInBrazil(false)
                                            setIsLoading(false)
                                        })
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                                // Alert.alert(err.message)
                                setIsLoading(false)
                            })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    // useEffect(() => {
    // receiveData('isFirstOpen').then((data) => {
    //     console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    //     console.log(data)
    //     if (data == null || data == undefined || data == '' || data == false) {
    //         storeData('isFirstOpen', true)
    //         storeData('isFirstPurchase', true)
    //     }
    // })
    // }, [])

    if (!isLoading) {
        if (isInBrazil) {
            return <WebViewScreen />
        } else {
            return <WelcomeScreen />
        }
    }
}

export default MainScreen

const styles = StyleSheet.create({})
