import { Dimensions } from 'react-native'

export default {
    screenSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    colors: {
        main: 'gray'
    }
}

export const ratioH = (value) => {
    return (value * Dimensions.get('screen').height) / Dimensions.get('screen').width
}
