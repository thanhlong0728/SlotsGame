import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GameScreen = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <StatusBar hidden={true} />
            <ImageBackground
                style={{
                    backgroundColor: 'gray',
                    flex: 1
                }}
            >
                <TouchableOpacity
                    style={{
                        height: '15%',
                        aspectRatio: 1,
                        backgroundColor: 'green',
                        right: 0
                    }}
                />
            </ImageBackground>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({})
