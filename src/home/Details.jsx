import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Details = () => {

    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/detail')
            .then(res => {
                // console.log(res.data)
                setDetail(res.data)
                console.log(detail)
            })
    }, [])

    return (
        <div className="flex justify-center pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    detail.map(det => <div key={det._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="h-64 w-full" src={det.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold pb-8 text-black">{det.name}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Details;