import React from 'react';
import { Box, Typography } from '@mui/material';

interface MessageProps {
  text: string;
  isSender: boolean;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ text, isSender, timestamp }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSender ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          maxWidth: '60%',
          padding: '10px',
          backgroundColor: isSender ? '#4A90E2' : '#1F2C34', // Different background for sender and receiver
          color: '#EDEDED',
          borderRadius: '10px',
          boxShadow: isSender
            ? '0 2px 5px rgba(0, 0, 0, 0.3)'
            : '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          {text}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          {timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
