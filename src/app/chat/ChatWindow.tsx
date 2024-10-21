import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import Message from './Messages';

interface MessageType {
  sender: string;
  text: string;
  timestamp: string;
}

const ChatWindow = ({
  contactName,
  onBack,
}: {
  contactName: string;
  onBack: () => void;
}) => {
  const [allMessages, setAllMessages] = useState<{ [key: string]: MessageType[] }>({
    'Meow meow meow': [
      { sender: 'Meow meow meow', text: 'Hello! Long time no see.', timestamp: '10:15 AM' },
      { sender: 'You', text: 'Hey! It has been a while.', timestamp: '10:16 AM' },
    ],
    Varsha: [
      { sender: 'Varsha', text: 'What time is the meeting?', timestamp: '9:00 AM' },
      { sender: 'You', text: 'It’s at 11:00 AM.', timestamp: '9:01 AM' },
    ],
  });

  const currentUser = 'You';
  const messages = allMessages[contactName] || [];
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [contactName]);

  const handleSendMessage = (text: string) => {
    const newMessage = {
      sender: currentUser,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setAllMessages((prevMessages) => ({
      ...prevMessages,
      [contactName]: [...(prevMessages[contactName] || []), newMessage],
    }));
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <ChatHeader title={contactName} onBack={onBack} />
      <Box
        ref={chatBoxRef}
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: 2,
          backgroundColor: '#000',
        }}
      >
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isSender={currentUser === msg.sender} timestamp={msg.timestamp} />
        ))}
      </Box>
      <ChatInput ref={inputRef} onSendMessage={handleSendMessage} />
    </Box>
  );
};

export default ChatWindow;
