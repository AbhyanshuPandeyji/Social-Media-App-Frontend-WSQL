// packages import
import { createBrowserRouter , RouterProvider , Route, Outlet, Navigate } from 'react-router-dom';



import './App.css';


// Component import 
import Navbar from './components/navbar/Navbar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'

// Pages Import 
import Login from "./pages/login/Login.jsx"
import Register from './pages/register/Register';
import Home from "./pages/home/Home.jsx";
import Profile from './pages/profile/Profile.jsx'






function App() {

  const currentUser = false;

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>

    )

  };


  const ProtectedRoute = ({children}) =>{
    //if user is not present go to login page
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    // if equal to current user then go to children 
    return children
  }
  

  // all will be defined inside the app component
  // also learn how to use the outlet to use the nav and footer with it
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <ProtectedRoute><Layout /> </ProtectedRoute>,
      children : [
        {
          path:'/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        }

      ]
    },
    {
      path : '/login',
      element: <Login/>,
    },
    {
      path : '/register',
      element: <Register/>,
    }
  ])


  return (
    <div >
      {/* <Login/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
