// import BubbleText from "../../components/BubbleText/BubbleText";
import DotGrid from "../../components/DotGrid/DotGrid";
import { TypeAnimation } from 'react-type-animation';
import MainButton from "../../components/MainButton/MainButton";


const Banner = () => {
    return (
        <div className="hero pt-20 lg:pt-36 ">
            <div className="hero-content flex-col md:flex-row-reverse gap-20 md:gap-5 lg:gap-32">
                <div className="absolute right-0 top-0 md:hidden lg:block lg:top-36 lg:right-6 -z-10">
                    <DotGrid></DotGrid>
                </div>
                <img src="https://i.ibb.co/GHn2yc8/f6d21a89-2356-4bfa-bcd5-ce76df8af87f.png" className=" max-w-[250px] lg:max-w-[365px]  rounded-md p-1 bg-slate-600" />
                <div className="">
                    <h1 className="text-3xl mb-2 font-bold text-[#21ebff]">Hi,</h1>
                    {/* <h1 className="text-4xl font-bold text-white">I&apos;m M. M. Shahriar Shakil</h1> */}
                    {/* <BubbleText></BubbleText> */}

                    <TypeAnimation className=" font-bold text-2xl md:text-3xl text-white"
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "I'm M. M. Shahriar Shakil",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'A Passionate Web Devloper',
                            1000,
                            'Innovative web Developer',
                            1000,
                            'Front-End Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />

                    <p className="text-xl"> with a keen eye for detail and a love for crafting digital experiences. This is my corner of the internet where I showcase my skills, projects, and a bit about who I am.</p>

                    <div className="flex gap-7 justify-center md:justify-start mt-5">
                        {/* <button className="btn btn-primary">View Works</button> */}
                        <MainButton
                            btnTytle={"View Work"}
                        ></MainButton>
                        <MainButton
                            btnTytle={"Hire Me"}
                        ></MainButton>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;