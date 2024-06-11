import './style.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import AboutMe from './components/pages/about-me/AboutMe';
import Proyectos from './components/pages/proyectos/Proyectos';
import Detalles from './components/pages/proyectos-detalles/Detalles';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='content'>
            <Header></Header>
            <main>
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="/aboutme" element={<AboutMe />}></Route>
                    <Route path="/proyectos" element={<Proyectos />}></Route>
                    <Route path="/proyectos/:id" element={<Detalles />}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;