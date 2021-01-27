import * as Font from 'expo-font';

export const useFonts = () => {
    return Font.loadAsync({
        MontserratBlack: require('../assets/fonts/montserrat/Montserrat-Black.ttf'),
        MontserratExtraBold: require('../assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
        MontserratBold: require('../assets/fonts/montserrat/Montserrat-Bold.ttf'),
        MontserratMedium: require('../assets/fonts/montserrat/Montserrat-Medium.ttf'),
        MontserratRegular: require('../assets/fonts/montserrat/Montserrat-Regular.ttf'),
        MontserratLight: require('../assets/fonts/montserrat/Montserrat-Light.ttf'),
        MontserratExtraLight: require('../assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
        MontserratThin: require('../assets/fonts/montserrat/Montserrat-Thin.ttf'),
    });
};
