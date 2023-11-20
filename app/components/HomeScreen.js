import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Utils from '../controllers/Utils'
import GameScreen from './GameScreen'

const HomeScreen = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 30
                }}
            >
                Welcome to PIPYL
            </Text>
            <Image
                style={{
                    height: Utils.screenSize.height * 0.3,
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
            <Modal visible={isShow} animationType='slide' onRequestClose={() => setIsShow(false)}>
                <GameScreen />
            </Modal>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
