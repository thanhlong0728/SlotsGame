import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        alert(error)
    }
}

export const receiveData = async (key) => {
    try {
        let data = await AsyncStorage.getItem(key)
        return JSON.parse(data)
    } catch (error) {
        return null
    }
}
