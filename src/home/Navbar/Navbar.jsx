
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HashLink  } from "react-router-hash-link";
import resume from "../../../public/Shakil'sResume.pdf"



const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><HashLink to="#about">About</HashLink></li>
                        <li><HashLink to="#skills">Skills</HashLink></li>
                        <li><HashLink to="#projects">Projects</HashLink></li>
                        <li><HashLink to="#contact">Contact</HashLink></li>
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-lg lg:text-xl" to='/'>M M SHAHRIAR SHAKIL</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><HashLink to="#about">About</HashLink></li>
                    <li><HashLink to="#skills">Skills</HashLink></li>
                    <li><HashLink to="#projects">Projects</HashLink></li>
                    <li><HashLink to="#contact">Contact</HashLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm md:btn-md" href={resume} >Download CV</a>
            </div>
        </div>
    );
};

export default Navbar;


