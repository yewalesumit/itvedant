import { PureComponent } from 'react';
import './App.css';
// import ExpensiveComponent from './component/ExpensiveComponent';
import Memo1 from './component/Memo1';
// import Mycomponent from './component/Mycomponent';
// import Mycomponent1 from './component/Mycomponent1';
// import ErrorBoundary from './component/ReactComponent';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Mycomponent />
      </ErrorBoundary> */}
      {/* <Mycomponent1 /> */}
      {/* <ExpensiveComponent num={50} /> */}
      <PureComponent>
        <Memo1 />
      </PureComponent>
      
    </div>
  );
}

export default App;
