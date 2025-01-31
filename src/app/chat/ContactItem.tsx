import React from 'react';
import { Box, Typography, Badge, ListItemButton, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For a custom read indicator icon

interface ContactItemProps {
  contact: {
    id: number;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
    isRead: boolean;
  };
  onSelect: (contactName: string) => void;
  isSelected: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onSelect, isSelected }) => {
  return (
    <ListItemButton
      onClick={() => onSelect(contact.name)}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #1F2C34',
        padding: '10px',
        color: '#EDEDED',
        backgroundColor: isSelected ? '#1F2C34' : 'inherit',
        '&:hover': {
          backgroundColor: '#2A3B45',
        },
      }}
    >
      {/* Left Side: Contact name and last message */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ color: '#EDEDED', fontWeight: isSelected ? 'bold' : 'normal' }}>
          {contact.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#B0B0B0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
          {contact.lastMessage}
        </Typography>
      </Box>

      {/* Right Side: Last message time, unread messages, and read status */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Display unread message count if there are unread messages */}
        {contact.unreadCount > 0 && (
          <Badge
            badgeContent={contact.unreadCount}
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#FF6F61',
                color: '#fff',
              },
            }}
          />
        )}

        {/* Last message time */}
        <Typography variant="caption" sx={{ color: '#B0B0B0' }}>
          {contact.lastMessageTime}
        </Typography>

        {/* Read status indicator (custom icon) */}
        {contact.isRead ? (
          <CheckCircleIcon sx={{ color: '#4A90E2', fontSize: 20 }} />
        ) : (
          <CheckCircleIcon sx={{ color: '#B0B0B0', fontSize: 20 }} />
        )}
      </Box>
    </ListItemButton>
  );
};

export default ContactItem;

