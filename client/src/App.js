import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Search/Search"
import './App.css';
import HomePage from "./components/Homepage/HomePage";
import SearchDetails from "./components/Search/SearchDetails";

const options = [
  { label: 'Paris' },
  { label: 'Marseille' },
  { label: 'Lyon' },
  { label: 'Strasbourg' },
  { label: 'Nice' },
  { label: 'Toulouse' },
  { label: 'Nantes' },
  { label: 'Montpellier' },
  { label: 'Bordeaux' },
  { label: 'Lille' },
  { label: 'Rennes' },
  { label: 'Reims' },
  { label: 'Toulons' },
  { label: 'Grenoble' },
  { label: 'Dijon' },
];

const App = () => {

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/search" exact={true} element={<Search />} />
          <Route path="/search/:id" exact={true} element={<SearchDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;