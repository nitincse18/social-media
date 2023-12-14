import React from 'react';
import {useTheme} from '../utils/ThemeContext'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import { Link } from 'react-router-dom';


const Header = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className="grid grid-flow-col  shadow-xl justify-between">
        <div className='flex col-span-1'>
            {/* <Link to={'/'}> */}
            <img className='w-16 h-16 mt-1 ml-8 bg-woman-img bg-center opacity-120' src={theme == 'light' ? '/logo1.png': '/logo-white.png'} alt='logo' />
            <h1 className='font-extrabold text-2xl mt-6 '><span >Social </span> <span className='text-yellow-500'>Nexus</span></h1>
            {/* </Link> */}
        </div>
            <button className='mx-6 mt-1 text-right' onClick={toggleTheme}>{theme === 'light' ?<NightsStayRoundedIcon/> : <WbSunnyRoundedIcon/>}</button>
    </div>
  )
}

export default Header