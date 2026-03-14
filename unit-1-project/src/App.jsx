import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ParentDashboard from './pages/ParentDashboard';
import FeelingFriends from './games/FeelingFriends/FeelingFriends';
import MainGames from './pages/MainGames';

function App () {
   return (
       <>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mini-games" element={<MainGames/>} />
            <Route path="/games/feeling-friends" element={<FeelingFriends/>} />
            <Route path="/parent-dashboard" element={<ParentDashboard/>}/>
            <Route path="/about" element={<About/>}/>
           </Routes>
       </>
   );
}

export default App;

