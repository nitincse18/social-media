import React from 'react'
import Feed from './Home/Feed';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import {useTheme} from '../utils/ThemeContext'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import SignUp from './Auth/SignUp';
import Header from './Header';

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
      ]);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }} >
        {/* <button className='mx-10 mt-2 text-right' onClick={toggleTheme}>{theme === 'light' ?<NightsStayRoundedIcon/> : <WbSunnyRoundedIcon/>}</button> */}
        <Header />
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body