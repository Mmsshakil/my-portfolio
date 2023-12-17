
import html from './../../assets/html.png'
import css from './../../assets/css.png'
import tailwind from './../../assets/tailwind.png'
import js from './../../assets/js.png'
import react from './../../assets/react.svg'
import node from './../../assets/nodejs.png'
import mongo from './../../assets/mongo.png'
import firebase from './../../assets/firebase.png'
import github from './../../assets/github.png'
import vscode from './../../assets/vscode.png'
import TiltCard from '../../components/TiltCard/TiltCard'

const Skills = () => {
    return (
        <div id="skills" className='flex justify-center items-center flex-col'>
            <div className="divider divider-success text-2xl md:text-4xl font-bold text-white w-4/5 md:w-1/2 mx-auto mt-10 md:mt-20 mb-5 md:mb-14">My Skills</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white '>
                {/* <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={html} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>HTML</p>
                </div> */}

                <TiltCard
                    technologyName={"HTML"}
                    image={html}
                ></TiltCard>

                <TiltCard
                    technologyName={"CSS"}
                    image={css}
                ></TiltCard>

                <TiltCard
                    technologyName={"Tailwind CSS"}
                    image={tailwind}
                ></TiltCard>

                <TiltCard
                    technologyName={"JavaScript"}
                    image={js}
                ></TiltCard>

                <TiltCard
                    technologyName={"Node.js"}
                    image={node}
                ></TiltCard>

                <TiltCard
                    technologyName={"React"}
                    image={react}
                ></TiltCard>

                <TiltCard
                    technologyName={"MongoDB"}
                    image={mongo}
                ></TiltCard>

                <TiltCard
                    technologyName={"Firebase"}
                    image={firebase}
                ></TiltCard>

                <TiltCard
                    technologyName={"GitHub"}
                    image={github}
                ></TiltCard>

                <TiltCard
                    technologyName={"VS Code"}
                    image={vscode}
                ></TiltCard>

            </div>
        </div>
    );
};

export default Skills;