
import { MdEmail, MdPhoneEnabled, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
    return (
        <div id="contact">
            <div className="divider divider-success text-2xl md:text-4xl font-bold text-white w-4/5 md:w-1/2 mx-auto mt-10 md:mt-20 mb-5 md:mb-14">Contact Me</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 md:gap-16  pb-10 w-full">
                <div className="text-center flex flex-col justify-center items-center">
                    <h1 className=" text-lg md:text-xl lg:text-3xl font-bold text-white">Contact Info</h1>


                    <div className="mt-7 space-y-2 md:space-y-4">

                        <div className="flex justify-center items-center">
                            <MdEmail className="text-2xl font-bold mr-2 text-blue-600"></MdEmail>
                            <p className="text-xl"><span className="font-bold text-white">Email :</span> softhandshakil@gmail.com</p>
                        </div>



                        <div className="flex gap-5 justify-center items-center">
                            <div className="flex justify-center items-center">
                                <FaLinkedin className="text-2xl font-bold mr-2 text-blue-600"></FaLinkedin>
                                <p className="text-xl"><a className="font-bold text-white" href="https://www.linkedin.com/in/mmsshakil">Linkedin</a></p>
                            </div>

                            <div className="flex justify-center items-center">
                                <FaGithub className="text-2xl font-bold mr-2 text-blue-600"></FaGithub>
                                <p className="text-xl"><a className="font-bold text-white" href="https://github.com/Mmsshakil">GitHub</a></p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <MdPhoneEnabled className="text-2xl font-bold mr-2 text-blue-600"></MdPhoneEnabled>
                            <p className="text-xl"><span className="font-bold text-white">Phone :</span> +8801786829816</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <MdLocationOn className="text-2xl font-bold mr-2 text-blue-600"></MdLocationOn>
                            <p className="text-xl"><span className="font-bold text-white">Address :</span>  Mohammadpur | Dhaka</p>
                        </div>

                    </div>
                </div>
                <div className="w-full ">
                    <form className=" w-full mx-auto flex flex-col px-5 lg:px-0">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="p-3 rounded-md w-full lg:w-3/4 bg-slate-900" type="text" placeholder="Name" />
                        </div>

                        <div>
                            <label className="label mt-2">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="p-3 rounded-md w-full lg:w-3/4 bg-slate-900" type="text" placeholder="Email" />
                        </div>

                        <div>
                            <label className="label mt-2">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full lg:w-3/4 bg-slate-900" placeholder="Message..."></textarea>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-info btn-outline">Sent Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;