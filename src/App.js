import React, {useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    const [height, setHeight] = useState(0);
    const scrollAttr = {
        spy: true,
        hashSpy: true,
        smooth: true,
        offset: -height 
    }
    useEffect(() => {
        setHeight(setHeight);
    }, [setHeight]);

    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar setHeight={setHeight} newAttr={scrollAttr}/>
            <About height={height} newAttr={scrollAttr}/>
            <Projects />
            <Skills />
            <Testimonials /> 
            <Contact /> 
            <Footer height={height} newAttr={scrollAttr} />
        </main>
    )
}
