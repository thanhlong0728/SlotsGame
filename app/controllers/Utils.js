import { Dimensions } from 'react-native'

export default {
    screenSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    colors: {
        main: '#E27A07'
    },
    images: {
        cherries: require('../assets/images/cherries.png'),
        crowns: require('../assets/images/crowns.png'),
        diamond: require('../assets/images/diamond.png'),
        lemon: require('../assets/images/lemon.png'),
        seven: require('../assets/images/seven.png'),
        apple: require('../assets/images/apple.png'),
        strawberry: require('../assets/images/strawberry.png')
    }
}

export const ratioH = (value) => {
    return (value * Dimensions.get('screen').height) / Dimensions.get('screen').width
}
