import React, { useEffect } from 'react';
import styled from 'styled-components';
import XContent from './component/content';
import XHeader from './component/header';
import { useRem } from './hooks/use-rem';

function App() {
  useRem()

  return (
    <XContent 
      head={<XHeader>成都公安局合成作战平台</XHeader>} 
    />
  );
}

export default App;

