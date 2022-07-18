import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import {useLocalStorage} from './hooks/useLocalSorage';

function App() {
  // Utilisation de useState avec un tableau vide (morceau d'état/me) qui contiendra des objets
  // (me/getter/technos) - ex: -> [{name: 'react', category: 'front', description: 'Learn React'}, {autre objet}, {autre objet}]
  // (me/setter/setTechnos) - modification des objets
  const [technos, setTechnos] = useState([]);
const STORAGE_KEY = 'technos';
const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log('useEffect with []');
    setTechnos(storedTechnos);
  }, [storedTechnos]);

  useEffect(() => {
    console.log('useEffect with [technos]');
    setStoredTechnos(technos);
  }, [setStoredTechnos, technos]);

  // fonction de jonction parent(App)/enfant(TechnoAdd) - (props = valeur(fonction) -> TechnoAdd/App -> App/TechnoAdd)
  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

  // fonction de jonction parent(App)/enfant(TechnoList) - (props = valeur(fonction) -> TechnoList/App -> App/TechnoList)
  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  }
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/add" element={ <TechnoAdd handleAddTechno={handleAddTechno} /> } />
      <Route path="/list" element={ <TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
    </Routes>
    </>
  );
}


export default App;
