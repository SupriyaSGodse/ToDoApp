import './App.css';
import HoverComponent from './Component/HoverComponent';
import ClickComponent from './Component/ClickComponent';
import StopWatch from './Component/StopWatch';

function App() {
  return (
    <div className="App">
      <ClickComponent />
      <HoverComponent />
      <StopWatch></StopWatch>
    </div>
  );
}

export default App;
