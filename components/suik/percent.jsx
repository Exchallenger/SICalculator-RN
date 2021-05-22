import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import {  TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

const Box = styled.View`
    margin-bottom:24px;
`;

const ForFlex = styled.View`
    flex-direction:row;
    justify-content:space-around;
    margin: 6px 0px 6px 6px;
    flex-wrap:wrap;
`;

const Text = styled.Text`
    color:white;
    line-height:30px;
    text-align:right;
    width:63px;
`;

const ProfitContainer = styled.View`
    flex-direction:row;
    width:50%;
    
`;

const Profit = styled.Text`
    line-height:30px;
`;

const Btn = styled.TouchableOpacity`
    
`;

const BText = styled.Text`
    color:white;
    line-height:40px;
    text-align:center;
`

const Percent = () => {
    const buys = useRef();
    const nows = useRef();
    const prices = useRef();

    const [buy,setBuy] = useState(0);
    const [pro,setPro] = useState(0);
    const [now, setNow] = useState(0);
    const [price, setPrice] = useState(0);
    const [nowPrice, setNowPrice] = useState(0);
    const [nowProfit,setNowProfit] = useState(0);
    const onNow = (t) => setNow(t);
    const onBuy = (t) => setBuy(t);
    const onPrice = (t) => setPrice(t);

    const onDelete = () =>{
        buys.current.clear();
        nows.current.clear();
        prices.current.clear();
        setPro(0);
        setPrice(0);
        setNowPrice(0);
        setNowProfit(0);
    }

    useEffect(() =>{
        buy!== 0 && now!==0 && setPro(((now-buy)/buy*100).toFixed(2));
    },[now,buy]);
    useEffect(() =>{
        setPrice(price);
        setNowProfit((price*pro/100).toFixed(0));
        setNowPrice((Number(price)+Number(nowProfit)).toFixed(0));
    },[price,nowProfit])

    return (
        <>
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
            colors={['#606c88', '#3f4c6b', '#606c88']}
            style={{
                paddingHorizontal:14,
                paddingVertical:8,
                borderRadius:6
            }}>
            <ForFlex>
             <TextInput
                ref={nows}
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
                placeholder="현재 단가를 입력하세요"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onNow(text)}
                />
                </ForFlex>
                <ForFlex>
             <TextInput
                ref={buys}
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
                placeholder="구매 단가를 입력하세요"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onBuy(text)}
                />
                </ForFlex>
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
                placeholder="매입금을 입력하세요"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onPrice(text)}
                />
                </ForFlex>
                </LinearGradient>
                </Box>
                
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
                 colors={['#606c88', '#3f4c6b', '#606c88']}
                 style={{
                    paddingHorizontal:14,
                    paddingVertical:8,
                    borderRadius:6
                }}>
                <ForFlex>
                <ProfitContainer>
                    <Text>손익률 </Text>
                    <Profit
                    style={{color: pro > 0 ? 'red' : (pro === 0 ? 'white' :'blue')}}>
                         {pro === 'NaN' ? ' ' : '  '+pro+'%'}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>평가손익 </Text>
                    <Profit
                    style={{color: nowProfit > 0 ? 'red' : (nowProfit > -1 ? 'white' :'blue')}}>
                        {nowProfit === NaN ? '' : '  '+nowProfit}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>매입금 </Text>
                    <Profit 
                    style={{color: 'white'}}>
                        {price === NaN ? '' : '  '+price}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>평가금 </Text>
                    <Profit
                    style={{color: nowPrice-price > 0 ? 'red' : (nowPrice-price > -1 ? 'white' :'blue')}}>
                        {nowPrice === NaN ? '' : '  '+nowPrice}
                    </Profit>
                </ProfitContainer>
                </ForFlex>
                </LinearGradient>
                </Box>
                <LinearGradient
        style={{
            height:40,
            width:'100%',
            borderRadius:7,
            marginBottom:24,
            borderColor:'black',
            borderWidth:1
        }}
        start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
        colors={['#606c88', '#3f4c6b', '#606c88']}>
            <Btn onPress={onDelete}>
            <BText>초기화</BText>
            </Btn>
            </LinearGradient>
                </>
    )      
};

export default Percent;