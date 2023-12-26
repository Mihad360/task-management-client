/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import Axiospublic from "../hooks/Axiospublic";
import Axiossecure from "../hooks/Axiossecure";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`

const Createtask = () => {

    // const {user} = useContext(Authcontext)
    const { user } = useAuth()
    const axiosPublic = Axiospublic()
    const axiosSecure = Axiossecure()
    const navigate = useNavigate()
    console.log(user)
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
            //now send the create shop data....
            const taskdetails = {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority,
            }
console.log(taskdetails)
            const task = await axiosSecure.post('/tasks', taskdetails)
            console.log(task.data)
            if(task.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Task created successfully',
                    showConfirmButton: false,
                    timer: 2000
                  });
                  navigate('/dashboard/todolist')
            }
        
    }

    return (
        
        <div>
            <h1 className="text-2xl text-center font-bold pt-8">Create a Task</h1>
            <div className="flex justify-center py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg shadow-xl bg-gray-100 p-10">
                <div className=" w-[1000px] flex justify-center gap-8">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Title</span>
                            </label>
                            <input {...register("title")} type="text" placeholder="Task Title" className="input input-bordered w-72" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Description</span>
                            </label>
                            <input {...register("description")} type="text" placeholder="Description" className="input input-bordered" required />
                        </div>
                        
                    </div>
                    <div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Deadline</span>
                            </label>
                            <input {...register("deadline")} type="date" placeholder="Task deadline" className="input input-bordered w-72" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Priority</span>
                            </label>
                            
                        </div>
                        Low 
                        <input className="mr-3" type="radio"  {...register("priority")} id="" value="Low" />
                         Moderate   
                        <input className="mr-3" type="radio"  {...register("priority")} id="" value="Moderate" />
                        High
                        <input className="mr-3" type="radio"  {...register("priority")} id="" value="High" />

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">ProductLimit</span>
                            </label>
                            <input {...register("productlimit")} type="text" placeholder="ProductLimit" className="input input-bordered" defaultValue={4} required />
                        </div> */}
                    </div>
                </div>
                <div className="form-control mx-auto w-48 pt-5">
                    <button className="btn bg-white text-black btn-neutral text-lg hover:text-white">Create Task</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Createtask;