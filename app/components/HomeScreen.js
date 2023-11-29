import {
    Dimensions,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Utils, { ratioH } from '../controllers/Utils'
import GameScreen from './GameScreen'
import Orientation from 'react-native-orientation-locker'
import Modal from 'react-native-modal'

const HomeScreen = () => {
    const [isShow, setIsShow] = useState(false)

    const getHeight = () => {
        if (Utils.screenSize.height < Utils.screenSize.width) {
            return Utils.screenSize.height * 0.5
        }
        return Utils.screenSize.width * 0.5
    }

    useEffect(() => {
        Orientation.lockToLandscape()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                // justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'row'
            }}
        >
            <StatusBar hidden={true} />
            {isShow ? (
                <GameScreen onClose={() => setIsShow(false)} />
            ) : (
                <ImageBackground
                    style={{
                        width: '100%',
                        // flex: 1,
                        // height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    source={require('../assets/images/bg.jpg')}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* <Text
                            style={{
                                fontSize: 32,
                                color: Utils.colors.main
                            }}
                        >
                            Welcome to <Text style={{ fontWeight: 'bold' }}>FRUIT SLOTS</Text>
                        </Text> */}
                        <Image
                            source={require('../assets/images/logo.jpg')}
                            style={{
                                height: getHeight(),
                                aspectRatio: 1
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
                                borderColor: Utils.colors.main,
                                backgroundColor: Utils.colors.main
                            }}
                            onPress={() => setIsShow(true)}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    fontWeight: 'bold'
                                    // color: Utils.colors.main
                                }}
                            >
                                PLAY NOW
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
