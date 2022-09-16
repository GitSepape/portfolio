import './style.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Proyectos from './components/pages/proyectos/Proyectos';
import Detalles from './components/pages/proyectos-detalles/Detalles';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Header></Header>
        <main>
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/proyectos" element={<Proyectos />}></Route>
                <Route path="/proyectos/:id" element={<Detalles />}></Route>
            </Routes>
        </main>
        </>
    );
}

export default App;