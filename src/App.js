import './style.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Proyectos from './components/proyectos/Proyectos';
import Detalles from './components/proyectos-detalles/ProyectosDetalles';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        <Header></Header>
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/proyectos" element={<Proyectos />}></Route>
                <Route path="/proyectos/:id" element={Detalles}></Route>
            </Routes>
        </main>
        </>
    );
}

export default App;
