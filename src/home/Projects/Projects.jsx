
import blood from '../../assets/blood.png'
import electro from '../../assets/technology.png'
import assingment from '../../assets/assingment.png'
import course from '../../assets/course.png'
import { NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <div id="projects" className='p-2 lg:p-0'>
            <div className="divider divider-success text-4xl font-bold text-white w-1/2 mx-auto my-14">My Projects</div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 px-10'>
                <div className=' border-2 rounded-lg'>
                    <img className='w-full' src={blood} alt="" />
                    <div className='p-5'>
                        <h1 className='text-2xl font-bold text-white'>Blood Donation Management</h1>
                        <p className='text-left'>The website allows anyone to view and respond to pending donation requests. Users can register to post their own requests with three roles: donor, volunteer, and admin. Admins can manage user roles and block individuals, while donors and volunteers have their own dashboards.</p>
                        <div className='flex gap-5 justify-center items-center mt-5'>
                            <NavLink to='https://github.com/Mmsshakil/blood-donation-manage-client'>
                                <button className='btn btn-info btn-outline'>Client Code</button>
                            </NavLink>
                            <NavLink to='https://github.com/Mmsshakil/blood-donation-manage-server'>
                                <button className='btn btn-info btn-outline'>Server Code</button>
                            </NavLink>
                            <NavLink to='https://blood-donor-ade3e.firebaseapp.com/'>
                                <button className='btn btn-info btn-outline'>Live Site</button>
                            </NavLink>

                        </div>
                    </div>
                </div>

                <div className='border-2 rounded-lg'>
                    <img className='w-full' src={electro} alt="" />
                    <div className='p-5'>
                        <h1 className='text-2xl font-bold text-white'>Electronics Shop</h1>
                        <p className='text-left'>My website features products from various brands. To access details, log in with email, password, or Google. Once logged in, update or add products. You can also add items to the cart and delete them if needed. Note: Intel brand has no products.</p>
                        <div className='flex gap-5 mt-5 justify-center items-center'>
                            <NavLink to='https://github.com/Mmsshakil/technology-electronics-shop-client'>
                                <button className='btn btn-info btn-outline'>Client Code</button>
                            </NavLink>
                            <NavLink to='https://github.com/Mmsshakil/technology-electronics-shop-server'>
                                <button className='btn btn-info btn-outline'>Server Code</button>
                            </NavLink>
                            <NavLink to='https://technology-electronics-2d25d.web.app'>
                                <button className='btn btn-info btn-outline'>Live Site</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='border-2 rounded-lg'>
                    <img className='w-full' src={assingment} alt="" />
                    <div className='p-5'>
                        <h1 className='text-2xl font-bold text-white'>Assingment Management</h1>
                        <p className='text-left'>On my website, users can create, update, and delete assignments. Submission involves attaching a PDF file with comments for marking and feedback from other users. Users cannot mark their own assignments. The site features a theme toggle for both dark and light modes. </p>
                        <div className='flex gap-5 mt-5 justify-center items-center'>
                            <NavLink to='https://github.com/Mmsshakil/assingment-management-client'>
                                <button className='btn btn-info btn-outline'>Client Code</button>
                            </NavLink>
                            <NavLink to='https://github.com/Mmsshakil/assingment-management-server'>
                                <button className='btn btn-info btn-outline'>Server Code</button>
                            </NavLink>
                            <NavLink to='https://assingment-manage.web.app'>
                                <button className='btn btn-info btn-outline'>Live Site</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='border-2 rounded-lg'>
                    <img className='w-full' src={course} alt="" />
                    <div className='p-5'>
                        <h1 className='text-2xl font-bold text-white'>Course Registration</h1>
                        <p className='text-left'>You can dynamically add more course data on the website. Calculating the total credit and price of selected courses is straightforward. The total credit is fixed, and choosing more than the allocated credit triggers a warning. Additionally, the system prevents adding the same course twice.</p>
                        <div className='flex gap-5 mt-5 justify-center items-center'>
                            <NavLink to='https://github.com/Mmsshakil/course-registration-by-react'>
                                <button className='btn btn-info btn-outline'>Client Code</button>
                            </NavLink>
                            <NavLink to='https://react-assingment-gamma.vercel.app'>
                                <button className='btn btn-info btn-outline'>Live Site</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;