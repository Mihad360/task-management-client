// import { useQuery } from "@tanstack/react-query/build/legacy";
// import Axiospublic from "./Axiospublic";
// import useAuth from "./useAuth";

// const useTask = () => {

//     const {user} = useAuth()
//     const axiosPublic = Axiospublic()

//     const {data: tasks = [], isPending: loading, refetch} = useQuery({
//         queryKey: ['tasks', user?.email],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/tasks/email?email=${user?.email}`)
//             return res.data
//         },
//         // enabled:!!user?.email
//     })

//     return [tasks,loading,refetch]
// };

// export default useTask;