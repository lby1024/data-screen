import XHeader from './component/header';
import XContainer from 'component/container';
import XChartBox from 'component/chart-box';
import XChart01 from 'component/chart-box/chart01';
import XChart02 from 'component/chart-box/chart02';

function App() {

  return (
    <XContainer 
      header={<XHeader>成都市公安局合成作战平台</XHeader>}
      part02={[<XChart01 key={1}/>, <XChart02 key={2}/>]}
    />
  );
}

export default App;
