import { Link, Route, Switch } from "react-router-dom";
import Camper from "./Camper";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <Link to="/">Camping Fun</Link><br />
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/campers/:id">
          <Camper />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
