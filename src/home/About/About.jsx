
const About = () => {
    return (
        <div>
            <div className="divider divider-success text-4xl font-bold text-white w-1/2 mx-auto mb-14">About Me</div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mx-auto">
                <div>
                    <img src="https://i.ibb.co/GHn2yc8/f6d21a89-2356-4bfa-bcd5-ce76df8af87f.png" className="max-w-xs rounded-md p-1 bg-slate-600" />
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">My Name is Shahriar Shakil</h1>
                        <p className="text-lg"> I&apos;m a web developer who is 5 feet 6 inches tall and 23 years old. I am currently living in Dhaka and originally from Rangpur district. Web development is not just my job; it&apos;s also my passion. My hobby includes traveling extensively, exploring new technologies, and experiencing new games.</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold text-white">Education Qualification - </h1>
                        <div className="border-2 w-full lg:w-2/3 shadow-lg p-3 space-y-2">
                            <h1 className="font-semibold text-green-500">2018 - 2022</h1>
                            <p className="font-bold text-green-700">Bachelor&apos;s Degree</p>
                            <p className="text-white font-bold">Bangladesh Army University of Science and Technology, Saidpur</p>
                            <p>I have completed my B.Sc. in Computer Science and Engineering with a CGPA of 3.01. During this period, I have gained knowledge in various courses.</p>
                        </div>
                        <div className="border-2 w-2/3 shadow-lg p-3 space-y-2">
                            <h1 className="text-xl font-bold text-white">2015 - 2017</h1>
                            <p className="font-bold text-green-700">Higher Secondary Degree</p>
                            <p className="text-white font-bold">Govt. Science College, Dhaka</p>
                            <p>I completed my HSC with a CGPA of 4.17. Due to some challenging times in my life, it was difficult for me, and as a result, I didn&apos;t achieve a higher grade.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;