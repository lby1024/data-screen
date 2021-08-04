import XHeader from './component/header';
import XContainer from 'component/container';
import XChartBox from 'component/chart-box';
import XChart01 from 'component/chart-box/chart01';
import XChart02 from 'component/chart-box/chart02';
import XChart03 from 'component/chart-box/chart03';
import XChart04 from 'component/chart-box/chart04';

function App() {

  return (
    <XContainer 
      header={<XHeader>成都市公安局合成作战平台</XHeader>}
      part02={[<XChart01 key={0}/>, <XChart02 key={1}/>]}
      part03={[<XChart03 key={0}/>, <XChart04 key={2}/>]}
    />
  );
}

export default App;
