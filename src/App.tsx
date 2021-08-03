import React, { useEffect } from 'react';
import XContent from './component/content';
import { useRem } from './hooks/use-rem';
import XHeader from './component/header';
import XLeftA from 'component/left/left-a';
import FlyBox from './component/fly-box';
import XLeftB from 'component/left/left-b';
import XContainer from 'component/container';

function App() {

  return (
    <XContainer 
      header={<XHeader>成都市公安局合成作战平台</XHeader>}
    />
  );
}

export default App;
