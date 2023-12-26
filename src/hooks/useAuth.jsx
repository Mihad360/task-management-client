import { useContext } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const useAuth = () => {
   const auth = useContext(Authcontext)
   // console.log(auth)
   return auth;
   
};

export default useAuth;