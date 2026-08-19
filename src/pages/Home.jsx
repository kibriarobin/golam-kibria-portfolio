import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";

const Home = () => {
    const projects = useLoaderData();
    const location = useLocation();

    // Scroll to section when URL contains a hash
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Banner />
            <About />
            <MySkills />
            <Projects projects={projects} />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;