import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ParentDashboard from './pages/ParentDashboard';
import FeelingFriends from './games/FeelingFriends/FeelingFriends';
import MainGames from './pages/MainGames';

function App () {

  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");

  const updateChild = (name, age) => {
    setChildName(name);
    setChildAge(age);
  }
   return (
       <>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mini-games" element={<MainGames childName={childName}/>} />
            <Route path="/games/feeling-friends" element={<FeelingFriends/>} />
            <Route path="/parent-dashboard" element={<ParentDashboard onUpdate={updateChild} childName={childName}/>}/>
            <Route path="/about" element={<About/>}/>
           </Routes>
       </>
   );
}

export default App;

