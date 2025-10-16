import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './features/Layout/Layout'
import HomePage from './features/Home/Home'
import Network from './features/Network/Network'
import Notifications from './features/Notifications/Notifications'
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'
import Friends from './features/Friends/Friends'
import Games from './features/Games/Games'
import PageEvents from './features/PageEvents/PageEvents'
import Profile from './features/Profile/Profile'
import Chatbot from './features/Chatbot/Chatbot'


const router = createBrowserRouter([
  { path: "/", element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <HomePage /> },
      { path: "network", element: <Network /> },
      { path: "notifications", element: <Notifications /> },
      { path: "login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "friends", element: <Friends /> },
      { path: "games", element: <Games /> },
      { path: "page-events", element: <PageEvents /> },
      { path: "profile", element: <Profile /> },
      { path: "Chatbot", element: <Chatbot /> },
    ]
  },
]);


function App() {

  return <>
   
    <RouterProvider router={router} />
    </>
}

export default App