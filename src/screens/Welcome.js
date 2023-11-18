import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';
import SvgTopGradient from '../components/SvgTopGradient';
import ButtonGradient from '../components/ButtonGradient';
import { 
  colors, 
  // adUnitIdBannerAd
 } from '../constants';

const { width, height } = Dimensions.get('window')

const Welcome = ({ navigation }) => {

  const onPressToAccounts = () => {
    navigation.navigate('Accounts')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTopGradient height={324} />
      </View>
      <View style={styles.containerLottieView}>
        <LottieView
          source={require('../assets/businesswoman.json')}
          style={{ width: '75%' }}
          autoPlay
          loop
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.content}>
          Any person or company that wants to efficiently
          manage their accounts receivable. With this application, you
          can keep complete control of debtors, their balances, payment
          terms and much more, all from the comfort of your mobile device.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.ButtonGradient}>
          <ButtonGradient
            textButton={'Accounts'}
            onPress={onPressToAccounts}
            colors={[colors.BLUEONE, colors.BLUETWO]}
          />
        </View>
      </View>

      {/* <BannerAd
        unitId={adUnitIdBannerAd}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerLottieView: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height / 2
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color: '#34434D',
  },
  ButtonGradient: {
    width: '40%'
  }
});

export default Welcome
