import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-5">
                <div className="bg-lime-200 col-span-1 min-h-screen list-none text-lg px-14 pt-8 font-medium">
                    <li>
                        <NavLink
                            to="/dashboard/todolist"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-600 font-bold underline" : ""
                            }
                        >
                            Todo list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/createtask"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-600 font-bold underline" : ""
                            }
                        >
                            Create task
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-600 font-bold underline" : ""
                            }
                        >
                            Todo list
                        </NavLink>
                    </li> */}
                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-600 font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </div>
                <div className="col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;