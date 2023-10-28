// packages import
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

// import './App.css';
import './style.scss'

// Component import
import Navbar from './components/navbar/Navbar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'

// Pages Import
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/authContext'

function App () {
  const { currentUser } = useContext(AuthContext)
  // const currentUser = true;

  // using context api - instead of use state hook to have it work where we want instead of one location specific
  const { darkMode } = useContext(DarkModeContext)

  console.log(darkMode)

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      // this is to work with react query - for fetching data and working with api request more efficiently than use effect and redux
      // but works generally for if you are ok with api request in single files - because it will still have the all the fetched data into
      // all component because we wrapped app into it
      <QueryClientProvider client={queryClient}>
        {/* // to change the background to dark or light , and it will change our text and different things */}
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({ children }) => {
    //if user is not present go to login page
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    // if equal to current user then go to children
    return children
  }

  // all will be defined inside the app component
  // also learn how to use the outlet to use the nav and footer with it
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />{' '}
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div>
      {/* <Login/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
