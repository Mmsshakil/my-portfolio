
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src="https://i.ibb.co/GHn2yc8/f6d21a89-2356-4bfa-bcd5-ce76df8af87f.png" className="max-w-xs rounded-md p-1 bg-slate-600" />
                <div className="">
                    <h1 className="text-2xl font-bold text-blue-600">Hey!</h1>
                    <h1 className="text-4xl font-bold text-white">I&apos;m M. M. Shahriar Shakil</h1>
                    <p className="">A passionate and innovative web developer with a keen eye for detail and a love for crafting digital experiences. This is my corner of the internet where I showcase my skills, projects, and a bit about who I am.</p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary">View Works</button>
                        <button className="btn btn-primary">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;