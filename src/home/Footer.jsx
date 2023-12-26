import { FaFacebook, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="py-16 px-52 bg-base-200">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <img className="w-32" src="https://i.ibb.co/9T8Xc2h/png-clipart-task-management-project-management-performance-management-business-text-service-removebg.png" alt="" />
                        <h1 className="text-3xl font-bold">TaskMasterHub</h1>
                    </div>
                    <div className="pl-6 pt-4">
                    <h1>React js</h1>
                    <p>Firebase</p>
                    <p>Tailwind Css</p>
                </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-2xl font-medium text-black pb-3">Socials & Other links</h1>
                        <div className="flex items-center gap-3">
                        <a className="text-2xl" href="https://www.facebook.com/miyad.ahammed.3"><FaFacebook />
                        </a>
                        <a className="text-2xl" href="https://github.com/Mihad360"><FaGithub />
                        </a>
                        </div>
                    </div>
                    <div className="pt-4">
                    <p>Express js</p>
                    <p>mongoDB</p>
                    <p>Node js</p>
                </div>
                </div>
            </div>
            <p className="text-center pt-10">Copyright © 2023 - All right reserved by TaskMasterHub Ltd</p>
        </div>
    );
};

export default Footer;