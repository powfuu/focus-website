import Home from './components/home/home'
import About from './components/about/about'
import From from './components/from/from'
import Goals from './components/goals/goals'
import Navigation from './components/nav/nav'
import Footer from './components/footer/footer'
import {Route,Routes} from 'react-router-dom';
import { WAPP } from './general-styles'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from './func/scrollTop'
import './App.css'
function App() {
useEffect(()=>{
AOS.init({
duration:500
})
},[])
return (
<WAPP>
    <Navigation />
    <ScrollTop/>
    <Routes>
    <Route path='/'
    element={<Home />}/>
    <Route path='/goals'
    element={<Goals />}/>
    <Route path='/work-with-us'
    element={<From />}/>
    <Route path='/about'
    element={<About />}/>
    </Routes>
    <Footer />
</WAPP>
  );
}
export default App;
