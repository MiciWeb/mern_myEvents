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
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/search" exact={true} element={<Search />} />
          <Route path="/search/:id" exact={true} element={<SearchDetails />} />
          <Route path="/login" exact={true} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;