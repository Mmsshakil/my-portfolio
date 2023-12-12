import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (

        <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,57,69,1) 100%)' }} >
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Banner></Banner>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;