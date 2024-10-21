import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatHeader = ({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#121B22',
        color: '#EDEDED',
        borderBottom: '1px solid #3A444C',
      }}
    >
      <IconButton onClick={onBack} sx={{ color: '#EDEDED', marginRight: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};

export default ChatHeader;
