import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  // Utilisation de useState avec un tableau vide (morceau d'état/me) qui contiendra des objets
  // (me/getter/technos) - ex: -> [{name: 'react', category: 'front', description: 'Learn React'}, {autre objet}, {autre objet}]
  // (me/setter/setTechnos) - modification des objets
  const [technos, setTechnos] = useState([]);

  // fonction de jonction parent(App)/enfant(TechnoAdd) - (props = valeur(fonction) -> TechnoAdd)
  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, techno]);
  }
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/add" element={ <TechnoAdd handleAddTechno={handleAddTechno} /> } />
      <Route path="/list" element={ <TechnoList />} />
    </Routes>
    </>
  );
}


export default App;
