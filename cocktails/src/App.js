import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Detail from "./pages/Detail";
import CardContextProvider from "./contexts/CardContext";
function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </CardContextProvider>
    </div>
  );
}

export default App;
