import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Inlinecomponent from './components/Inlinecomponent';
import OutlineComponent from './components/OutlineComponent';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <Todo/> */}
      {/* <Inlinecomponent/> */}
      {/* <OutlineComponent/> */}
      <Header/>
      <Todo/>
    </div>
  );
}

export default App;
