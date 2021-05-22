import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import After from './After/After';
import Before from './Before/Before';


const Conatiner = styled.View`
`;


export default function App() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 3500);
  return (
    <Conatiner>
      {loading ? <StatusBar style="dark"/> : null}
      {loading ? <After/> : <Before/>}
    </Conatiner>
  );
}
