import React from 'react';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Water from '../components/water';
import Bokri from '../components/bokri';
import Suik from '../components/suik';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  import { getStatusBarHeight } from 'react-native-status-bar-height';

  const height = getStatusBarHeight();


const Container = styled.View`
    height:100%;
    /* background-color:b; */
    padding-top:${height}px;
`;


//ca-app-pub-2935973059354035~4594445771

const Tab = createMaterialTopTabNavigator();

const After = () => {
    return (
    <Container>
    <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-2935973059354035/1391801005" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />

    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="물타기" component={Water} />
      <Tab.Screen name="손익률" component={Suik} />
      <Tab.Screen name="복리" component={Bokri} />
    </Tab.Navigator>
    </NavigationContainer>
    </Container>
    );
};

export default After;