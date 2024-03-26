let onlineUsers=[];

export const getOnlineUsers = () => onlineUsers;

export const addOnlineUsers = (newUser) => {
    console.log('onlineUsers newUser', newUser)
    onlineUsers.push(newUser);
    console.log('onlineUsers addOnlineUsers', onlineUsers)
}

export const removeOnlineUser = (user) => {
    onlineUsers = onlineUsers.filter(item => item !== user);
}