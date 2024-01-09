import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Info } from './components/Info';

function App() {

  const [data, setData] = useState({}) 
  const [state, setState] = useState(false)

  return (
    <div className="App">
      <Form setData = {setData} setState = {setState}/>
      <Info data = {data} state = {state}/>
    </div>
  );
}

export default App;
