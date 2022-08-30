import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get('/api/chat');
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>This is chat page</div>;
};

export default ChatPage;
