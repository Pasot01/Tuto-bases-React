import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

import MyProfil from "./pages/MyProfil";
import MyCourses from "./pages/Courses/Learning/MyCourses";
import WebCourses from "./pages/Courses/Web/WebCourses";

function App() {
  const [technos, setTechnos] = useState([]);

  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // On first App component mount
  useEffect(() => {
    setTechnos(storedTechnos);
    console.log("App component mounted");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On every technos change
  useEffect(() => {
    setStoredTechnos(technos);
    console.log("Technos changed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [technos]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(technoId) {
    setTechnos(technos.filter((techno) => techno.technoid !== technoId));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProfil" element={<MyProfil />}>
          <Route path="/MyProfil/Courses/Learning" element={<MyCourses />} />
          <Route path="/MyProfil/Courses/Web" element={<WebCourses />} />
        </Route>
        <Route path="/TechnoAdd" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/TechnoList" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;