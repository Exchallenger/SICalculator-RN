import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    height:100%;
    margin:8px;
`;

const ForFlex = styled.View`
    flex-direction:row;
    justify-content:space-around;
    margin: 6px 0px 6px 6px;
    flex-wrap:wrap;
`;

const ForText = styled.View`
    flex-direction:row;
    justify-content:center;
    margin: 6px 0px 6px 6px;
    flex-wrap:wrap;
`;

const Box = styled.View`
    margin:12px 0px;
`;

const Text = styled.Text`
    color:white;
    line-height:30px;
`;

const Result = styled.Text`
    color:white;
    line-height:30px;
`;

const Btn = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;

const BText = styled.Text`
    color:white;
    line-height:35px;
`;

const BtnContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    `;

const Bokri = () => {
    const days = useRef();
    const prices = useRef();
    const percents = useRef();

    const [day, setDay] = useState(0);
    const [price, setPrice] = useState(0);
    const [percent, setPercent] = useState(0);
    const [res, setRes] = useState(0);

    const onDay = (t) => setDay(t);
    const onPrice = (t) => setPrice(t);
    const onPercent = (t) => setPercent(t);
    const onDelete = () =>{
        setDay(0);
        days.current.clear();
        setPrice(0);
        prices.current.clear();
        setPercent(0);
        percents.current.clear();
        setRes(0);
    }
    const onCal = () =>{
        if(day!==0 && price!==0 && percent!==0){
            let sum = Number(price);
            for(let i = 0; i<day; i++){
                sum= sum+(sum*Number(percent)/100);
            }
            setRes(sum.toFixed(0));
            console.log('hi');
        }
        Keyboard.dismiss();

    }
    useEffect(()=>{
    setDay(day);
    setPrice(price);
    setPercent(percent);
    },[day,price,percent]);

    return (
        <Container>
        <Box
             style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,

                elevation: 16,
            }}>
              <LinearGradient
            start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
            colors={['#5691c8', '#457fca', '#5691c8']}
            style={{
                paddingHorizontal:14,
                paddingVertical:8,
                borderRadius:6
            }}> 
             <ForFlex>
            <TextInput
               ref={prices}
               style={{
                   width:'80%',
                   height:30,
                   color:'white',
                   borderColor:'white',
                   borderWidth:1,
                   borderRadius:6,
                   padding:6,
                   textAlign:'center'
               }}
               placeholder="~원 으로"
               placeholderTextColor="white"
               keyboardType='decimal-pad'
               onChangeText={text => onPrice(text)}
               />
               <Text>원</Text>
               </ForFlex>
                <ForFlex>
                 <TextInput
                ref={days}
                style={{
                    width:'80%',
                    height:30,
                    color:'white',
                    borderColor:'white',
                    borderWidth:1,
                    borderRadius:6,
                    padding:6,
                    textAlign:'center'
                }}
                placeholder="~달 동안"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onDay(text)}
                />
                <Text>달</Text>
                </ForFlex>
              
                <ForFlex>
             <TextInput
                ref={percents}
                style={{
                    width:'80%',
                    height:30,
                    color:'white',
                    borderColor:'white',
                    borderWidth:1,
                    borderRadius:6,
                    padding:6,
                    textAlign:'center'
                }}
                placeholder="%의 수익을 내면"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onPercent(text)}
                />
                <Text>%</Text>
                </ForFlex>
                <ForText>
                    <Result>
                        {res}
                    </Result>
                    <Text>원 입니다.</Text>
                </ForText>
                </LinearGradient>
                </Box>

        <BtnContainer>
                <LinearGradient
        style={{
            height:40,
            width:'45%',
            borderRadius:7,
            // marginLeft:15,
            borderColor:'black',
            borderWidth:1
        }}
        start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
        colors={['#606c88', '#3f4c6b', '#606c88']}>
            <Btn onPress={onDelete}>
            <BText>초기화</BText>
            </Btn>
            </LinearGradient>
            <LinearGradient
        style={{
            height:40,
            width:'45%',
            borderRadius:7,
            borderColor:'black',
            borderWidth:1
        }}
        start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
        colors={['#5691c8', '#457fca', '#5691c8']}>
            <Btn onPress={onCal}>
            <BText>계산하기</BText>
            </Btn>
            </LinearGradient>
            </BtnContainer>
        </Container>
    );
};

export default Bokri;