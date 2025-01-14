import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import Projects from './sections/Projects.jsx';

import WorkExperience from './sections/Experience.jsx';

const App = () => {
    return (
        <ThemeProvider>
        <main className="max-w-7xl mx-auto relative bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <Hero />
            <About />
            <Projects/>
            {/* <Clients /> */}
            <WorkExperience />
            <Contact />
            <Footer />
        </main>
        </ThemeProvider>
    );
};

export default App;