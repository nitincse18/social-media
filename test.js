

function mergeArrays(onlineUsers, conversationList) {
    const mergedArray = [];

    // Add all users from onlineUsers
    onlineUsers.forEach(user => {
        const { userId, name, socketId } = user;
            mergedArray.push({
                userId,
                name,
                isOnline: !!socketId,
                newMsgCount: 0
            });        
    });

    // Add objects from conversationList regardless of newMsgCount
    conversationList.forEach(conversation => {
        const { userId, name, socketId, newMsgCount } = conversation;
        const existsInMergedArray = mergedArray.some(item => item.userId === userId);
        
        if (!existsInMergedArray) {
            mergedArray.push({
                userId,
                name,
                isOnline: !!socketId,
                newMsgCount
            });
        }else{
            const objIndex = mergedArray.findIndex(obj => obj.userId == userId);
            mergedArray[objIndex].newMsgCount = newMsgCount
        }
    });

    return mergedArray;
}


const onlineUsers = [
    {
        "userId": 1,
        "socketId": "lBV5ARV5nXCwXayIAAB2",
        "name": "Nitin Kumar"
    },
    {
        "userId": 3,
        "socketId": "E-p38EGbfqKqN7S0AAB9",
        "name": "Nikhil Kumar"
    }
];

const conversationList = [
  {
      "userId": 2,
      "name": "EDITI RANJAN",
      "socketId": "",
      "newMsgCount": 4
  },
  {
      "userId": 3,
      "name": "Nikhil Kumar",
      "socketId": "",
      "newMsgCount": 1
  }
];
const mergedArray = mergeArrays(onlineUsers, conversationList);
console.log(mergedArray);
