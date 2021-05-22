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
    margin: 24px 14px 14px 14px;
`;
const ForFlex = styled.View`
    margin:8px 0px;
    flex-direction:row;
    justify-content:space-around;
`;

const RContainer = styled.View`
    width:50%;
    `;

const AddBox = ({del,getAddResult,scal,index}) => {
    console.log(index);
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
        if(del===true){
            setResult(0);
            nums.current.clear();
            avers.current.clear();
            setResult(0);
            setAver(0);
            setNum(0);
        }
    },[del]);

    useEffect(() =>{
        if(scal===true){
            getAddResult(num,aver,result);
        }
    },[scal])


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
            
            start={{x: 1, y: 0.25}} end={{x: 1, y: 2.0}}
            // colors={['#00c6ff', '#0072ff', '#00c6ff']}
            colors={['#5691c8', '#457fca', '#5691c8']}
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
                    <Text>추가수량</Text>
                </TextContainer>
            <TextInput
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
                ref={nums}
                />
                <Text>개</Text>
            </ForFlex>
            <ForFlex>
                <TextContainer>
                    <Text>추가원화</Text>
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

export default AddBox;


