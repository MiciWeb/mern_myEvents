import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Search/Search"
import Select from 'react-select';
import { useState } from 'react'
import './App.css';
import hero from "./components/image/hero.svg"
import HomePage from "./components/Homepage/HomePage";

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
  const [city, setCity] = useState("")
  const [startDate, setStartDate] = useState("")
  const [issou, setIssou] = useState("yatangaki")
  
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<HomePage setCity={setCity} />} />
          <Route path="/search" exact={true} element={<Search city={city} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;