
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

const Skills = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className="divider divider-success text-4xl font-bold text-white w-1/2 mx-auto my-14">My Skills</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={html} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>HTML</p>
                </div>

                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={css} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>CSS</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={tailwind} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>Tailwind CSS</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={js} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>JavaScript</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={node} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>Node.js</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={react} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>React</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={mongo} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>MongoDB</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={firebase} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>Firebase</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={github} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>GitHub</p>
                </div>
                <div className='w-64 h-64 flex flex-col justify-center items-center gap-0 shadow-lg bg-slate-900 p-8 space-y-2 rounded-lg'>
                    <img className='w-20 mb-4' src={vscode} alt="" />
                    <p className='text-center font-bold text-2xl text-white'>VS Code</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;