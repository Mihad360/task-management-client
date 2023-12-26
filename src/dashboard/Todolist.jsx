import { Link, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Axiospublic from "../hooks/Axiospublic";
import { useState } from "react";
import Swal from "sweetalert2";

const Todolist = () => {

    const { user } = useAuth()
    const axiosPublic = Axiospublic()
    const [tasks, setTasks] = useState([])
    // console.log(user)
    // const [tasks] = useTask()
    // console.log(tasks)
    axiosPublic.get('/tasks')
        .then(res => {
            console.log(res.data)
            setTasks(res.data)
        })

        const handledelete = id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosPublic.delete(`/tasks/${id}`)
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        console.log(res.data)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "This task has been removed",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        const remaining = tasks.filter(task => parseFloat(task._id) !== parseFloat(task._id))
                        setTasks(remaining)
                    }
    
                }
            });
        }

    return (
        <div className="p-5">
            <div className="flex items-center justify-between px-10">
                <div className="flex gap-3 items-center">
                    <img className="rounded-full w-24 " src={user?.photoURL} alt="" />
                    <div>
                        <h1 className="text-2xl font-semibold text-black">{user?.displayName}</h1>
                    </div>
                </div>
                <div>
                    <Link to='/dashboard/createtask'><button className="btn btn-accent text-lg px-10">Create Task</button></Link>
                </div>
            </div>
            <hr className="w-full my-5 " />
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        tasks.map(task => <div key={task._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-bold">{task.title}</h2>
                                    <p className="text-justify">{task.description}</p>
                                    <div className="flex items-center justify-between">
                                        <p >Deadline: {task.deadline}</p>
                                        <p>Priority: {task.priority}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handledelete(task._id)} className="btn btn-accent">Delete task</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Todolist;