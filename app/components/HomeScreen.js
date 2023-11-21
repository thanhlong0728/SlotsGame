import { Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Utils, { ratioH } from '../controllers/Utils'
import GameScreen from './GameScreen'
import Orientation from 'react-native-orientation-locker'

const HomeScreen = () => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        Orientation.lockToLandscape()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}
        >
            <StatusBar hidden={true} />
            <Text
                style={{
                    fontSize: 35,
                    marginRight: 30
                }}
            >
                Welcome to PIPYL
            </Text>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{
                        height: Utils.screenSize.height * 0.4,
                        aspectRatio: 1,
                        backgroundColor: Utils.colors.main,
                        marginTop: 16,
                        marginBottom: 16
                    }}
                />
                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 160,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                        borderWidth: 4,
                        borderColor: Utils.colors.main
                    }}
                    onPress={() => setIsShow(true)}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: Utils.colors.main
                        }}
                    >
                        Go home
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isShow} animationType='slide' onRequestClose={() => setIsShow(false)}>
                <GameScreen />
            </Modal>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
