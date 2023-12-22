import Navbar from "./components/navbar"
import Intro from './components/intro'
import Skills from "./components/skills"
import Works from "./components/work"
import Contact from "./components/contact"
import Footer from "./components/footer"
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
