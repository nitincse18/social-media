import React from 'react'
import Feed from './Home/Feed';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import {useTheme} from '../utils/ThemeContext'
import SignUp from './Auth/SignUp';
import Header from './Shared/Header';
import UserProfile from './Profile/UserProfile';
import SubHeader from './Shared/SubHeader';
import Pictures from './Profile/Pictures';
import Chat from './Shared/Chat';
import Friends from './Friends/Friends';

const Body = () => {
    const { theme, toggleTheme } = useTheme();
    const appRouter = createBrowserRouter([
     
        {
          path: "/",
          element: <Login />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
          },
        {
          path: "/home",
          element:<Feed />,
        },
        {
          path: "/user-profile/:id/posts",
          element:<UserProfile />,
          
        },
        // {
        //   path: "/user-profile/:id/pictures",
        //   element:<Pictures />,
        // },
        {
          path: 'chat',
          element: <Chat />
        },
        {
          path: 'friends',
          element: <Friends />
        },
      ]);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }} >
        {/* <Header /> */}
        {/* <SubHeader/> */}
        <Outlet/>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body