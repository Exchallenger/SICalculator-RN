import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import {  TextInput } from 'react-native';
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
`;

const Price = () => {
    const nows = useRef();
    const firsts = useRef();
    const [now,setNow] = useState(0);
    const [first,setFirst] = useState(0);
    const [result,setResult] = useState({
        percent:0,
        profit:0,
    });
    const onNow = (t) => setNow(t);
    const onFirst = (t) => setFirst(t);

    const onDelete = () =>{
        setResult({percent:0,profit:0});
        setFirst(0);
        setNow(0);
        nows.current.clear();
        firsts.current.clear();
    }
    useEffect(() =>{
        setNow(now);
        setFirst(first);
        now !== 'NaN' && setResult({
            percent:((((Number(now)-Number(first))/Number(first))*100).toFixed(2)),
            profit:((Number(now)-Number(first))),
        })
    },[first,now])

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
            colors={['#5691c8', '#457fca', '#5691c8']}
            style={{
                paddingHorizontal:14,
                paddingVertical:8,
                borderRadius:6
            }}>
            <ForFlex>
             <TextInput
                ref={firsts}
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
                placeholder="시작 원금을 입력하세요"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onFirst(text)}
                />
                </ForFlex>
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
                placeholder="현재 자산을 입력하세요"
                placeholderTextColor="white"
                keyboardType='decimal-pad'
                onChangeText={text => onNow(text)}
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
                 colors={['#5691c8', '#457fca', '#5691c8']}
                 style={{
                    paddingHorizontal:14,
                    paddingVertical:8,
                    borderRadius:6
                }}>
                <ForFlex>
                <ProfitContainer>
                    <Text>손익률 </Text>
                    <Profit
                    style={{color: result.percent > 0 ? 'red' : (result.percent === 0 || 'NaN' ? 'white' :'blue')}}>
                         {result.percent === 'NaN' ? '  0%' : '  '+result.percent+'%'}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>평가손익 </Text>
                    <Profit
                    style={{color: result.profit > 0 ? 'red' : (result.profit > -1 ? 'white' :'blue')}}>
                        {result.profit === 'NaN' ? ' ' : '  '+result.profit}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>매입금 </Text>
                    <Profit 
                    style={{color: 'white'}}>
                        {first === NaN ? ' ' : '  '+first}
                    </Profit>
                </ProfitContainer>
                <ProfitContainer>
                    <Text>평가금 </Text>
                    <Profit
                    style={{color: now-first > 0 ? 'red' : (now-first > -1 ? 'white' :'blue')}}>
                        {now === NaN ? '' : '  '+now}
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
            borderColor:'black',
            borderWidth:1
        }}
        start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
        colors={['#5691c8', '#457fca', '#5691c8']}>
            <Btn onPress={onDelete}> 
            <BText>초기화</BText>
            </Btn>
            </LinearGradient>
                <Box
                style={{
                    height:100,
                }}
                />
                </>
    )      
};

export default Price;