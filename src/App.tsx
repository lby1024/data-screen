import React, { useEffect } from 'react';
import styled from 'styled-components';
import XContent from './component/content';
import { useRem } from './hooks/use-rem';

function App() {
  useRem()

  return (
    <XContent >
      <Box/> 
    </XContent>
  );
}

export default App;

const Box = styled.div`
  width: 3.67rem;
  height: 3.15rem;
  background-color: skyblue;
`
