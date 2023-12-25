

import { HashLink } from "react-router-hash-link";
import resume from "../../../public/Shakil'sResume.pdf"
import EncryptButton from "../../components/Button/EncryptButton";
import { Link } from "react-scroll";



const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black max-w-screen-xl mx-auto text-white rounded-none lg:rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        <li><Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="about">About</Link></li>
                        <li><Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="skills">Skills</Link></li>
                        <li><Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="projects">Projects</Link></li>
                        <li><Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="contact">Contact</Link></li>
                    </ul>
                </div>
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="btn btn-ghost text-base font-bold lg:text-xl" to='home'>M M SHAHRIAR SHAKIL</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="about">About</Link></li>
                    <li><Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="skills">Skills</Link></li>
                    <li><Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="projects">Projects</Link></li>
                    <li><Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        to="contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} >
                    <EncryptButton
                        TARGET_TEXT={'Download CV'}
                    ></EncryptButton>
                </a>
            </div>
        </div>
    );
};

export default Navbar;


