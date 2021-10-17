import logo from './logo.svg';
import './App.css';
import ControlledComponent from './controlledComponent/controlledComponent';
import UncontrolledComponent from './uncontrolledComponent/uncontrolledComponent'

function App() {
  return (
    <div className="App">
     
     <h1>Controlled Component</h1>
     <ControlledComponent/>
     <br/>

     <h1>Uncontrolled Component</h1>
     <UncontrolledComponent/>

    </div>
  );
}

export default App;
