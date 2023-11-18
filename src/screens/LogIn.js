import React, {
  // useState 
} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { BannerAd, BannerAdSize, RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';
import ButtonGradient from '../components/ButtonGradient';
import SvgTopGradient from '../components/SvgTopGradient';
import {
  colors,
  // adUnitIdBannerAd, 
  // adUnitIdRewardedAd
} from '../constants';

const { width, height } = Dimensions.get('window')

// const rewarded = RewardedAd.createForAdRequest(adUnitIdRewardedAd, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['game', 'play'],
// });

const LogIn = ({ navigation }) => {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });
  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     reward => {
  //       console.log('User earned reward of ', reward);
  //     },
  //   );

  //   // Start loading the rewarded ad straight away
  //   rewarded.load();

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  const onPressToWelcome = () => {
    // rewarded.show();
    navigation.navigate('Welcome')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTopGradient height={324} />
      </View>
      <View style={styles.containerLottieView}>
        <LottieView
          source={require('../assets/busionessman.json')}
          style={{ width: '60%' }}
          autoPlay
          loop
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>My finances</Text>
        <Text style={styles.subTitle}>Sign In to your finances</Text>
        <View style={styles.ButtonGradient}>
          <ButtonGradient
            textButton={'Sign In'}
            onPress={onPressToWelcome}
            colors={[colors.BLUEONE, colors.BLUETWO]}
          />
        </View>
        <Text style={styles.forgotPassword}>You don't need to have an account</Text>
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
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  containerSVG: {
    width: width,
    justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 20
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
    marginBottom: 20
  },
  ButtonGradient: {
    width: '40%'
  }
});

export default LogIn