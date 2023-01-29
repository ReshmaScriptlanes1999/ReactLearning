import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom"
import Apple from './components/Apple';
import State from './components/State';
import Prop from './components/Prop';
import Input from './components/Input';
import SubComponent from './components/SubComponent';
import Toogle from './components/Toggle';
import Form from './components/Form';
import Conditionalrendering from './components/Conditionalrendering'
import Validation from './components/Validation';
import Passfunctionasprops from './components/Passfunctionasprops';
import Effect from './components/Effect';
import Css from './components/Css';
import Array from './components/Array';
import { Route } from 'react-router-dom';
import Routeee from './components/Routeee';
function App() {
  function getData(){
    alert("ooooo")
  }
  return (
    <div className="App">
      hello
      <SubComponent></SubComponent>
      <Apple />
      <State />
      <Prop name></Prop>
      <Input />
      <Toogle />
      <Form />
      <Conditionalrendering />
      <Validation />
      <Passfunctionasprops data={getData}></Passfunctionasprops>
      <Effect></Effect>
      <Css></Css>
      <Array />
      {/* <BrowserRouter>
      <Routeee />
      </BrowserRouter> */}
        </div>
  );
}

export default App;
