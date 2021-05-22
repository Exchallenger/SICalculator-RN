import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import Percent from './suik/percent';
import Price from './suik/price';


const Container = styled.ScrollView`
    padding: 12px 8px;
    height:100%;
`;


const Suik = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Container keyboardShouldPersistTaps='handled'>
            <Percent/>
            <Price/>
        </Container>
        </KeyboardAvoidingView>
    );
};

export default Suik;