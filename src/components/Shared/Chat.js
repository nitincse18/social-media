import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', ({ data }) => {
      handleNewMessage(data);
    });
    
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmitNewMessage = () => {
    console.log('messageInput', messageInput)
    socket.emit('message', { data: messageInput });
    setMessageInput('');
  };

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  const buildNewMessage = (message, index) => {
    return <li key={index}>{message}</li>;
  };

  return (
    <div>
      <div className='p-2 m-3'>
        <ul id="messages">
          {messages.map((message, index) => buildNewMessage(message, index))}
        </ul>
      </div>

      <div>
        <input className='border border-blue-700'
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className='bg-blue-700 rounded-lg p-1 ' onClick={handleSubmitNewMessage}>Submit</button>
      </div>
    </div>
  );
};

export default Chat;
