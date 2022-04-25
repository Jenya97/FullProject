import './App.css';
import Production from './Components/Pages/Production';
import Collections from './Components/Pages/Collections';
import AllProduct from './Components/Pages/AllProduct';
import NotFound from './Components/Pages/NotFound';
import Sewing from './Components/Pages/Sewing';
import Home from './Components/Pages/Home';
import Informations from './Components/Pages/Informations';
import Layout from './Components';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index path='/' element={<Home/>}/>
    <Route path='/production' element={<Production/>}/>
    <Route path='/collections' element={<Collections/>}/>
    <Route path='/allproduct' element={<AllProduct/>}/>
    <Route path='/sewing' element={<Sewing/>}/>
    <Route path='/information' element={<Informations/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>
    </Routes>
  );
}

export default App;
