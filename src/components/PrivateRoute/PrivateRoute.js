import { Navigate, Outlet } from "react-router-dom";



const useAuth=()=>{
   


  const user={loggedin:true};
  return user &&user.loggedin
}
const ProtectedRoute=()=>{
  const isAuth=useAuth();
  return isAuth?<Outlet/>:<Navigate to='/'/>
}

export default ProtectedRoute;