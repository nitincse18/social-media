import React, {useEffect, useState} from 'react'
import { getOnlineUsers } from '../../utils/globals'
import { socket } from '../Shared/socket/socketConfig'
import { DEFAULT_PROFILE_IMAGE } from '../../utils/constant'
import { Link } from 'react-router-dom'
// import { io } from "socket.io-client";

//  const socket = io("http://localhost:4000", { autoConnect: false });
const ActiveFriends = () => {
    const [onlineUsers, setOnlineUsers] = useState([])
    let user = JSON.parse(localStorage.getItem('token'));
    console.log('user', user)

    useEffect(() => {
        console.log('message')
        socket.emit('addUser', user.id);
        socket?.on('getUsers', users => {
            console.log('online users', users)
            setOnlineUsers(users)
        })
      }, []);


  return (
    <div>
        <h1 className='font-extrabold text-gray-500'>Active Friends</h1>
        {
            onlineUsers.map((user) => 
            <Link to={'/'} >
                <div className=' p-2  rounded-xl my-2 hover:bg-slate-400 cursor-pointer'
                >
                    <div className='flex'>
                        <img src={user.img || DEFAULT_PROFILE_IMAGE} className='h-7 w-7 rounded-full' />
                        <h1 className='font-bold mx-2'>{user.name}</h1>
                    </div>
                    
                </div>
                </Link>
            )
                
        }
    </div>
  )
}

export default ActiveFriends