import { updateProfile } from "firebase/auth";
import { useState } from "react";
import Axiospublic from "../hooks/Axiospublic";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const Register = () => {

    const [error, setError] = useState('')
    const { createuser } = useAuth();
    const navigate = useNavigate()
    const axiosPublic = Axiospublic()
    // const [shops, , refetch] = useShop()

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        setError('')

        if (data.password.length < 6) {
            setError('Password must have at least 6 character!!')
            return
        } else if (!/^(?=.*[A-Z]).+$/.test(data.password)) {
            setError('Password must have one Uppercase word!!')
            return
        } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(data.password)) {
            setError('Password must have one special character!!')
            return
        }

        createuser(data.email, data.password)
            .then(async (result) => {
                console.log(result.user)
                const imageFile = { image: data.image[0] }
                const res = await axiosPublic.post(image_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                console.log(res.data)
                if (res.data.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You Registered successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    result.user.displayName = data.name
                    result.user.photoURL = res.data.data.display_url

                    updateProfile(result.user, {
                        displayName: data.name,
                        photoURL: res.data.data.display_url
                    })
                        .then(() => {
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                            }
                            axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data)
                            })
                        })
                }

            })
    }

    return (
        <div>
            
            <div className="flex justify-center items-center gap-8 py-12">
                <div className="flex-col items-center">
                    <h1 className="text-2xl font-bold">Welcome to Register page</h1>
                    <img src="https://i.ibb.co/cYM6BR4/depositphotos-515228796-stock-illustration-online-registration-sign-login-account.webp" alt="" />
                </div>
                <div className="bg-lime-200 min-h-[70vh] p-10 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Photo URL</span>
                            </label>
                            <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                        </div>
                        <p className="text-black pt-2">Already have an account? <Link to='/login' className="text-orange-600">Please Login</Link></p>
                        <div>
                            <p className="text-red-500 font-semibold">
                                {
                                    error && <p>{error}</p>
                                }
                            </p>
                        </div>
                        <div className="text-center pt-5">
                            <button className="btn btn-accent text-black font-bold text-xl px-10">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;