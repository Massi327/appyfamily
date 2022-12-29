import logo from './logo.svg';
import {createContext, useReducer} from "react";
import {initialState, Reducer} from "./Reducer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calendario from "./Calendario";
import {Image} from "react-bootstrap";
import './App.css';

export const StateContext = createContext()

function App() {
  return (
      <StateContext.Provider value={useReducer(Reducer, initialState, A=>A)}>
        <div className="App">
          <header>
            <Image src={logo} alt={"Immagine del logo"} fluid style={{blockSize: "100px", marginBottom: "15px"}}/>
          </header>
          <BrowserRouter>
            <Routes>
              <Route path={"/home"} element={<Calendario/>}/>
              <Route path={"/"} element={<Calendario/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </StateContext.Provider>
  );
}

export default App;

