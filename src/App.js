import img_1 from './img_1.png';
import {createContext, useReducer} from "react";
import {initialState, Reducer} from "./Reducer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calendario from "./Calendario";
import Profile from "./Profile"
import Home from "./Home";
import Settings from "./Settings";
import People from "./People";
import Blogs from "./Blogs";
import Hashtags from "./Hashtags";
import {Image} from "react-bootstrap";
import './App.css';

export const StateContext = createContext()

function App() {
  return (
      <StateContext.Provider value={useReducer(Reducer, initialState, A=>A)}>
        <div className="App">
          <header>
            <Image src={img_1} alt={"Immagine del logo"} fluid style={{blockSize: "100px", marginBottom: "15px"}}/>
          </header>
          <BrowserRouter>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/calendar"} element={<Calendario/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/settings"} element={<Settings/>}/>

                <Route path={"/people"} element={<People/>}/>
                <Route path={"/blogs"} element={<Blogs/>}/>
                <Route path={"/hashtags"} element={<Hashtags/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </StateContext.Provider>
  );
}

export default App;

