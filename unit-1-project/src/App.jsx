import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ParentDashboard from "./pages/ParentDashboard";
import FeelingFriends from "./games/FeelingFriends/FeelingFriends";
import MainGames from "./pages/MainGames";
import KindCreatures from "./games/KindCreatures/KindCreatures";
import ParentLogin from "./pages/ParentLogin";
import ParentCreateAccount from "./pages/ParentCreateAccount";
import CreateChildAccount from "./pages/CreateChildAccount";

function App() {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] =
    useState(
      "",
    ); /*havent incorporated age anywhere yet but hope to in the future */

  const onUpdateChild = (name, age) => {
    setChildName(name);
    setChildAge(age);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/parent-create-account" element={<ParentCreateAccount />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route
          path="/parent-create-account"
          element={<ParentCreateAccount />}
        />
        <Route path="/create-child-account" element={<CreateChildAccount onUpdateChild={onUpdateChild} childName={childName} />} />
        <Route
          path="/mini-games"
          element={<MainGames childName={childName} />}
        />
        <Route
          path="/games/feeling-friends"
          element={<FeelingFriends childName={childName} />}
        />
        <Route
          path="/games/kind-creatures"
          element={<KindCreatures childName={childName} />}
        />
        <Route path="/about" element={<About childName={childName} />} />
      </Routes>
    </>
  );
}

export default App;
