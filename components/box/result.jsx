import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


const Text = styled.Text`
    /* color:white; */
    font-size:15px;
    line-height:30px;
    text-align:center;
    `;

const TextContainer = styled.View``;

const ProfitContainer = styled.View`

`;
const ForFlex = styled.View`
    margin:1px 0px;
    flex-direction:row;
    justify-content:space-around;
`;

const RContainer = styled.View`
    width:50%;
    `;

const Result = ({num,result,del}) => {
    const [aver, setAver] = useState(0);
    const [numb, setNumb] = useState(0);
    const [resu, setResu] = useState(0);
    useEffect(() =>{
        setNumb(num);
        setResu(result);
        setAver((result/num).toFixed(2));
    },[num,result]);
    useEffect(() =>{
        if(del===true){
        setNumb(0);
        setResu(0);
        setAver(0);
        }
    },[del]);


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

            <ForFlex>
                <TextContainer>
                    <Text>최종단가</Text>
                </TextContainer>
            <RContainer>
                <Text>{aver==="NaN" ? 0 : aver}</Text>
            </RContainer>
                <Text>원</Text>
            </ForFlex>
            <ForFlex>
                <TextContainer>
                    <Text>최종수량</Text>
                </TextContainer>
            <RContainer>
                <Text>{numb ? numb : 0}</Text>
            </RContainer>
                <Text>개</Text>
            </ForFlex>
            <ForFlex>
                <TextContainer>
                    <Text>최종원화</Text>
                </TextContainer>
            <RContainer>
                <Text>{resu ? resu : 0}</Text>
            </RContainer>
                <Text>원</Text>
            </ForFlex>
            </ProfitContainer>
    );
};

export default Result;

