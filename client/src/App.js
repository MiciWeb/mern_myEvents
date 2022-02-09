import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/Homepage/HomePage"
import Search from "./components/Search/Search"
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/search" exact={true} component={Search} />
        </Switch >
      </Router>
    </div>
  )
}

export default App;