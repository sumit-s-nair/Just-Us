import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(({ onSendMessage }, ref) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the TextField

  // Expose the focus method to parent components
  useImperativeHandle(ref, () => inputRef.current!);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Clear input after sending
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSend(); // Send message when "Enter" is pressed
      event.preventDefault(); // Prevent newline being added
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        borderTop: '1px solid #1F2C34',
        backgroundColor: '#000',
      }}
    >
      <TextField
        inputRef={inputRef} // Assign ref to the TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ backgroundColor: '#EDEDED', borderRadius: '8px' }}
      />
      <IconButton
        color="primary"
        onClick={handleSend}
        sx={{ marginLeft: 2 }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
});

export default ChatInput;
