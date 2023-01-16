import img_1 from './img_1.png';
import {createContext, useReducer} from "react";
import {initialState, Reducer} from "./Reducer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calendario from "./Calendario";
import Profile from "./Profile"
import Home from "./Home";
import Settings from "./Settings";
import Nearme from "./Nearme";
import People from "./People";
import Blogs from "./Blogs";
import Hashtags from "./Hashtags";
import Tutorial from "./Tutorial";
import Messaggi from "./Messaggi";
import Notifiche from "./Notifiche";
import Add from "./Add";
import './App.css';
import Sintesi from "./Sintesi";
import Follower from "./Follower";
import Chat from "./Chat";
import Addforum from "./Addforum";
import Gym from "./Gym"
import CenterCalendar from "./CenterCalendar"
import CenterBlogs from "./CenterBlogs"

export const StateContext = createContext()

function App() {

  return (
      <StateContext.Provider value={useReducer(Reducer, initialState, A=>A)}>
        <div className="App">
          <BrowserRouter>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/calendar"} element={<Calendario/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
                <Route path={"/tutorial"} element={<Tutorial/>}/>
                <Route path={"/messages"} element={<Messaggi/>}/>
                <Route path={"/notifications"} element={<Notifiche/>}/>

                <Route path={"/add"} element={<Add/>}/>
                <Route path={"/addforum"} element={<Addforum/>}/>

                <Route path={"/people"} element={<People/>}/>
                <Route path={"/blogs"} element={<Blogs/>}/>
                <Route path={"/hashtags"} element={<Hashtags/>}/>
                <Route path={"/nearme"} element={<Nearme/>}/>

                <Route path={"/sintesi"} element={<Sintesi/>}/>
                <Route path={"/follower"} element={<Follower/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
                <Route path={"/gym"} element={<Gym/>}/>

                <Route path={"/centercalendar"} element={<CenterCalendar/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </StateContext.Provider>
  );
}

export default App;

