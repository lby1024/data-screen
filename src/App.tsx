import XHeader from './component/header';
import XContainer from 'component/container';
import XChart01 from 'component/chart-box/chart01';
import XChart02 from 'component/chart-box/chart02';
import XChart03 from 'component/chart-box/chart03';
import XChart04 from 'component/chart-box/chart04';
import XChart05 from 'component/chart-box/chart05';
import XChart0607 from 'component/chart-box/chart0607';
import XChart0809 from 'component/chart-box/chart0809';
import XForm02 from 'component/form/form02';
import XForm01 from 'component/form/form01';
import XChart1012 from 'component/chart-box/chart1012';
import XFooter from 'component/footer';

function App() {

  return (
    <XContainer 
      header={<XHeader>成都市公安局合成作战平台</XHeader>}
      part02={[<XChart01 key={0}/>, <XChart02 key={1}/>]}
      part03={[<XChart03 key={0}/>, <XChart04 key={2}/>]}
      part04={<XChart05/>}
      part05={[<XChart0607 key={0}/>, <XChart0809 key={1}/>, <XForm02 key={2} />]}
      part06={<XForm01/>}
      part07={<XChart1012 />}
      part08={<XFooter />}
    />
  );
}

export default App;
