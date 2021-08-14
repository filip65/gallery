import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <h2>home</h2>
        </Route>
        <Route path="/gallery">
          <h2>gallery</h2>
        </Route>
        <Route path="*">
          <h2>bad page</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
