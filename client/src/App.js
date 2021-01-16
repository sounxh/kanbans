import Header from "./components/Header";
import Body from "./components/Body";
import SelectBoard from "./components/SelectBoard";
import Home from "./components/Home";
import Login from './components/Login'
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* penser a bien lui passer le user conecter quand cette partie sera faite */}
      {/* <SelectBoard/> */}
      {/* <Header />
      <Body /> */}
      <Switch>
        <Route path="/" exact component={SelectBoard} />
        <Route path="/" exact component={SelectBoard} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
