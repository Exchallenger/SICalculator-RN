import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';


const Text = styled.Text`
    font-size:18px;
    line-height:30px;
    text-align:center;
    color:white;
    `;

const TextContainer = styled.View``;

const ProfitContainer = styled.View`
    margin: 24px 14px 0px 14px;
`;
const ForFlex = styled.View`
    margin:8px 0px;
    flex-direction:row;
    justify-content:space-around;
`;

const RContainer = styled.View`
    width:50%;
    `;

const Box = (props,{getAddResult}) => {
    const nums = useRef();
    const avers = useRef();
    const [result, setResult] = useState(0);
    const [aver, setAver] = useState(0);
    const [num, setNum] = useState(0);
    const onAverage = (text) => {
        setAver(text);
        setResult(Math.round(aver*num));
    };

    const onNum = (text) => {
        setNum(text);
        setResult(Math.round(aver*num));
    };

    useEffect(() =>{
        setResult(Math.round(aver*num));
    },[aver,num,result]);

    useEffect(() =>{
        if(props.del ===true){
            setResult(0);
            nums.current.clear();
            avers.current.clear();
            setAver(0);
            setNum(0);
            props.setDel(false);
        }else{
            console.log('nop');
        }
    },[props.del]);

    useEffect(() =>{
        if(props.scal===true){
            props.getAddResult(num,aver,result);
        }
    },[props.scal])

    return (
            <ProfitContainer
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,

                elevation: 16,
            }}
            >
            <LinearGradient
            start={{x: 0.2, y: 0.25}} end={{x: 0.5, y: 2.0}}
            colors={['#e53935', '#e35d5b', '#e53935']}
            style={{
                paddingHorizontal:14,
                paddingVertical:8,
                borderRadius:6

            }}
            >
            <ForFlex>
                <TextContainer>
                    <Text>평균단가</Text>
                </TextContainer>
            <TextInput
            ref={avers}
                style={{
                    width:'50%',
                    height:30,
                    color:'white',
                    borderColor:'white',
                    borderWidth:1,
                    borderRadius:6,
                    padding:6,
                }}
                keyboardType='decimal-pad'
                onChangeText={text => onAverage(text)}
                />
                <Text>원</Text>
            </ForFlex>
            <ForFlex>
                <TextContainer>
                    <Text>보유수량</Text>
                </TextContainer>
            <TextInput
            ref={nums}
                style={{
                    width:'50%',
                    height:30,
                    color:'white',
                    borderColor:'white',
                    borderWidth:1,
                    borderRadius:6,
                    padding:6,
                }}
                keyboardType='decimal-pad'
                onChangeText={text => onNum(text)}
                />
                <Text>개</Text>
            </ForFlex>
            <ForFlex>
                <TextContainer>
                    <Text>보유원화</Text>
                </TextContainer>
            <RContainer>
                <Text>{result}</Text>
            </RContainer>
                <Text>원</Text>
            </ForFlex>
            </LinearGradient>
            </ProfitContainer>
    );
};

export default Box;
