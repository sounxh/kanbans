import SelectBoard from "./components/SelectBoard";
import Home from "./components/Home";
import Login from './components/Login'
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* penser a bien lui passer le user conecter quand cette partie sera faite */}
      {/* <SelectBoard/> */}
      {/* <Header />
      <Body /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/SelectBoard" component={SelectBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
