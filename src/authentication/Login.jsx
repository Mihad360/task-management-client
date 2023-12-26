/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import Axiospublic from "../hooks/Axiospublic";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa6";


const Login = () => {

    const [error, setError] = useState('')
    const {googlelogin,signin} = useAuth()
    const { register, handleSubmit } = useForm()
    const axiosPublic = Axiospublic()
    const navigate = useNavigate()
    // const [shops, ,refetch] = useShop()
// console.log(shops, shops.length)

    const handlegoogle = () => {
        googlelogin()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate(location?.state ? location.state : '/')
            })
        })
        .catch(error => {
            console.log(error.message)
            
        })
    }

    const onSubmit = (data) => {
        console.log(data)
        signin(data.email, data.password)
        .then(result => {
            // const user = result.user;
                // console.log(user)
                Swal.fire({
                    title: "Logged in!",
                    text: "Successfully logged in",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')
                
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div>

            <div className="flex justify-center items-center gap-8">
                <div className="flex-col items-center">
                    <h1 className="text-2xl font-bold">Welcome to Login page</h1>
                    <img src="https://i.ibb.co/rGZDZ8R/istockphoto-1281150061-612x612-1.jpg" alt="" />
                </div>
                <div className="bg-lime-200 min-h-[60vh] p-10 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <p className="text-black pt-2">Don't have an account? <Link to='/register' className="text-orange-600">Please Register</Link></p>
                        <p className="text-xl text-red-600 py-2">{error}</p>
                        <div className="text-center pt-5">
                            <button className="btn btn-accent text-black font-bold text-xl px-10">Login</button>
                        </div>
                        
                    </form>
                    <div className="text-center pt-5">
                            <button onClick={handlegoogle} className="btn bg-white text-black font-bold text-xl px-5"><span className="flex items-center gap-3"><FaGoogle /><span>Login with Google</span></span></button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;