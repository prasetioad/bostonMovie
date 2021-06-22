import {Provider} from 'react-redux'
import store from './config/redux/store';
import Routers from './router';


function App() {
  return (
    <Provider store = {store}>
      <Routers />
    </Provider>
  );
}

export default App;
