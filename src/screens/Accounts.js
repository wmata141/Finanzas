import React from "react";
import { View, StyleSheet, BackHandler, ImageBackground } from "react-native";
// import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import ButtonGradient from '../components/ButtonGradient';
import AccountList from "../components/AccountList";
import Alert from '../components/Alert';
import Wallpaper from '../assets/wallpaper.jpeg';
import {
  colors,
  // adUnitIdBannerAd
} from "../constants";

const Accounts = () => {
  const onPressToExit = () => {
    Alert('Thanks !!!', 'The record of your finances will remain here', exitApp)
  }

  const exitApp = () => {
    BackHandler.exitApp();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
        <AccountList />
        <View style={styles.ButtonGradient}>
          <ButtonGradient
            textButton={'Exit'}
            onPress={onPressToExit}
            colors={[colors.REDONE, colors.REDTWO]}
          />
        </View>
      </ImageBackground>

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
  container: {
    flex: 1,
  },
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 5,
  },
  ButtonGradient: {
    width: '100%'
  }
})

export default Accounts