import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (

        <div className='max-w-screen-xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;