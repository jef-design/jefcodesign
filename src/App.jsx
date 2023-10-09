import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectInfo from "./pages/ProjectInfo";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/project/:title" element={<ProjectInfo />} />
                <Route path="/about" element={<About />} />
                
              </Routes>
              <Contact/>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
