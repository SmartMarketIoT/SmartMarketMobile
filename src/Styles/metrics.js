import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    smallMargin: 5,
    baseMargin: 10,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    BottomNavigatorHeight: Platform.OS === 'ios' ? 70 : 60,
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    baseRadius: 3,
};

export default metrics;
