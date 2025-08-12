import FetchFromMultipleEndpoints from './components/FetchFromMultipleEndpoints';
import MutatingData from './components/MutatingData';
import Pagination from './components/Pagination';
import RefetchInterval from './components/RefetchInterval';
import StaleTime from './components/StaleTime';
import WithoutTanStackQuery from './components/WithoutTanStackQuery';
import WithTanstackQuery from './components/WithTanstackQuery';

const App = () => {
  return (
    <div>
      {/* <WithoutTanStackQuery /> */}
      {/* <WithTanstackQuery /> */}
      {/* <StaleTime /> */}
      {/* <RefetchInterval /> */}
      {/* <FetchFromMultipleEndpoints /> */}
      {/* <MutatingData /> */}
      <Pagination />
    </div>
  );
};
export default App;
