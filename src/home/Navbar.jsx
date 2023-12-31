import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {

    const { user, logout } = useAuth()

    const handlelogout = () => {
        logout()
            .then(res => {
                console.log(res.data)
            })
    }

    const links = <div className="flex items-center gap-3 text-base">
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-sky-500 text-white font-medium" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/todolist"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-sky-500 text-white font-medium" : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-sky-500 text-white font-medium" : ""
                }
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-sky-500 text-white font-medium" : ""
                }
            >
                Register
            </NavLink>
        </li>
        {/* <li>
            {
                user ? <button onClick={handlelogout} className="text-sky-600 font-bold text-xl">Log out</button> : ''
            }
        </li> */}
    </div>

    return (
        <div>
            <div className="navbar px-16 bg-lime-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-32" src="https://i.ibb.co/9T8Xc2h/png-clipart-task-management-project-management-performance-management-business-text-service-removebg.png" alt="" />
                        <p className="text-3xl font-bold">TaskMasterHub</p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div>
                    <li className="list-none pl-3">
                        {
                            user ? <button onClick={handlelogout} className="text-sky-600 font-bold text-xl">Logout</button> : ''
                        }
                    </li>
                    <li className="list-none pl-10">
                            {
                                user && <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-5 lg:gap-2">

                                    <h1 className="text-xl font-bold hidden md:block text-black">{user?.displayName}</h1>
                                    <img className="w-12 rounded-full ml-12 md:ml-0" src={user?.photoURL} alt="" />
                                </div>
                            }
                        </li>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;