import Home from "./Components/Home/Home"
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import RouteLayout from "./Components/Global/Route";
import NuestraHistoria from "./Components/NuestraHistoria";
import CCDTKids from "./Components/CCDTKids";
import DiezmosOfrendas from "./Components/DiezmosOfrendas";
import Radio from "./Components/Radio";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteLayout exact path='/' component={Home}  />
        <RouteLayout exact path='/nuestra-historia' component={NuestraHistoria}  />
        <RouteLayout exact path='/ccdt-kids' component={CCDTKids}  />
        <RouteLayout exact path='/diezmos-ofrendas' component={DiezmosOfrendas}  />
        <RouteLayout exact path='/radio' component={Radio}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
