import React from 'react'
import Feed from './Home/Feed';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import {useTheme} from '../utils/ThemeContext'
import SignUp from './Auth/SignUp';
import Header from './Shared/Header';
import UserProfile from './Profile/UserProfile';
import SubHeader from './Shared/SubHeader';

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
          path: "/user-profile",
          element:<UserProfile />,
        },
      ]);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }} >
        <Header />
        <SubHeader/>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body