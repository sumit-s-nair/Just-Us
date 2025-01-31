import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ onSendMessage }, ref) => {
    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Expose the focus method to parent components
    useImperativeHandle(ref, () => inputRef.current!);

    const handleSend = () => {
      if (message.trim()) {
        onSendMessage(message);
        setMessage('');
      }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        handleSend();
        event.preventDefault();
      }
    };

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderTop: '1px solid #1F2C34',
          backgroundColor: '#121B22',
        }}
      >
        <TextField
          inputRef={inputRef}
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSend}
          sx={{
            marginLeft: 1,
            backgroundColor: '#4A90E2',
            color: '#FFFFFF',
            borderRadius: '50%',
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    );
  }
);

ChatInput.displayName = 'ChatInput';

export default ChatInput;
