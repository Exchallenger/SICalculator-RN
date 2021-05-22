import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect ,useRef} from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Container = styled.View`
    height:${height}px;
    position: relative;
    /* justify-content:flex-end; */
    /* align-items:center; */
`;

const Text = styled.Text`
    font-family:'myfont';
    font-size:23px;
    /* font-weight:600; */
    /* color:white; */
    text-align:center;
`;

const KText = styled.Text`
    font-family:'mykfont';
    font-size:28px;
    /* font-weight:600; */
    /* color:white; */
    text-align:center;
    margin-top:8px;
`

const TextContainer = styled.View`
    padding:4px 8px;
    border-radius:12px;
    /* border:3px solid white; */
    /* background-color:black; */
    margin-bottom:12px;
`;

const Stick = styled.View`
    position:absolute;
    top:${height}px;
    left:${width/2-25}px;
    z-index:1;
    width:50px;
    height:2000px;
    background-color:red;
`;

const Stick1 = styled.View`
     position:absolute;
    top:${height}px;
    left:10px;
    z-index:1;
    width:50px;
    height:2000px;
    background-color:red;
`;
const Stick2 = styled.View`
     position:absolute;
    top:${height}px;
    left:${width-60}px;
    z-index:1;
    width:50px;
    height:2000px;
    background-color:red;

`;

const Before = () => {
    const [loaded] = useFonts({
        myfont : require('../assets/fonts/KaushanScript-Regular.ttf'),
        mykfont : require('../assets/fonts/EastSeaDokdo-Regular.ttf')
    })
    const goUp = useRef(new Animated.Value(0)).current;
    const move = () => Animated.timing(goUp,{
        toValue:-height,
        duration:2000,
        useNativeDriver:true
    }).start();

    const goUp1 = useRef(new Animated.Value(0)).current;
    const move1= () => Animated.timing(goUp1,{
        toValue:-height,
        duration:2500,
        useNativeDriver:true
    }).start();

    const goUp2 = useRef(new Animated.Value(0)).current;
    const move2 = () => Animated.timing(goUp2,{
        toValue:-height,
        duration:3000,
        useNativeDriver:true
    }).start();

    const FadeAnim = useRef(new Animated.Value(0)).current;
    const Fade = () => Animated.timing(FadeAnim,{
        toValue:1,
        duration:3000,
        useNativeDriver:true
    }).start();

    useEffect(() =>{
        move();
        move1();
        move2();
        Fade();
    })
    return (
        <>
        {
            loaded ?  <Container>
            <Animated.View
             style={[{
                transform:[{translateY:goUp}]
            }]}>
            <Stick/>
            </Animated.View>
            <Animated.View
             style={[{
                transform:[{translateY:goUp1}]
            }]}>
            <Stick1/>
            </Animated.View>
            <Animated.View
             style={[{
                transform:[{translateY:goUp2}]
            }]}>
            <Stick2/>
            </Animated.View>
            <Animated.View
                style={[{
                    alignItems:'center',
                    justifyContent:'center',
                    height:'100%',
                    opacity:FadeAnim
                }]}>
                <Text>
                    Successful Investment
                </Text>
                <Text>Calculator</Text>
                         
                
                <KText>성투를 기원합니다 :)</KText>
                
            </Animated.View>
        </Container>
        :
        <AppLoading/>
        }
        </>
           
        
    );
};

export default Before;