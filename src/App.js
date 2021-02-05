import logo from './logo.svg';
import './App.css';
import Hookscounter from './Hookscounter';
import Hooksthree from './Hooksthree';
import Hooksuseeffect from './Hooksuseeffect';
import MouseWithHooks from './MouseWithHooks';
import HooksAutoCount from './HooksAutoCount';
import Datafetch from './Datafetch';
import Compa from './Contextdemo/Compa'
import ReduxCounter from './Reduxdemo.js/ReduxCounter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = { count: 0 }
const store = createStore(reducer)
function reducer(state = initialState, action) {
  // console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
// store.dispatch({ type: 'INCREMENT', amount: 5 })
// store.dispatch({ type: 'DECREMENT', amount: 5 })

function App() {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
    // <div className="App">
    //   {/* <Hookscounter/> */}
    //   {/* <Hooksthree/> */}
    //   {/* <Hooksuseeffect/> */}
    //   {/* <MouseWithHooks/> */}
    //   {/* <HooksAutoCount/> */}
    //   {/* <Datafetch/> */}
    //   {/* <Compa/> */}
    //   <ReduxCounter />
    // </div>
  );
}

export default App;
