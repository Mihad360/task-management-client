/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-40 bg-lime-200 py-16">
                <div>
                    <img className="w-[600px]" src="https://i.ibb.co/Fg8GryD/task-management-it-concept-vector-21299966-removebg-preview.png" alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-medium text-black pb-3">Welcome to my task management site <br /> <span className="text-sky-500 font-bold text-2xl">TaskMasterHub</span></h1>
                    <button className="btn bg-sky-500 text-lg px-5">Let's Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;