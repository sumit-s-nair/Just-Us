'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import ChatWindow from './chat/ChatWindow';
import ContactList, { Contact } from './chat/ContactList';

const theme = createTheme({
  palette: {
    background: {
      default: '#121B22',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const HomePage = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');

  const contacts: Contact[] = [
    { id: 1, name: 'Meow meow meow', lastMessage: 'Hello!', lastMessageTime: '10:15 AM', unreadCount: 3, isRead: false },
    { id: 2, name: 'Genda', lastMessage: 'Gay mf', lastMessageTime: '9:00 PM', unreadCount: 1, isRead: false },
    { id: 3, name: 'Pappu', lastMessage: 'Catch you later!', lastMessageTime: 'Yesterday', unreadCount: 0, isRead: true },
    { id: 4, name: 'Megatron', lastMessage: 'You’re next!', lastMessageTime: '2 days ago', unreadCount: 5, isRead: false },
  ];

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleSelectContact = (contactName: string) => {
    setSelectedContact(contactName);
  };

  const handleBack = () => {
    setSelectedContact(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [contacts, searchInput]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', height: '100vh', backgroundColor: '#121B22', overflow: 'hidden' }}>
        <Box
          sx={{
            width: isSmallScreen ? '100%' : '450px',
            borderRight: { md: '1px solid #1F2C34' },
            backgroundColor: '#1F2C34',
            height: '100vh',
            overflowY: 'auto',
          }}
        >
          <Box sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EDEDED', marginBottom: 2 }}>
              Just Us
            </Typography>

            <TextField
              fullWidth
              placeholder="Search contacts"
              variant="outlined"
              value={searchInput}
              onChange={handleSearchChange}
              sx={{
                marginBottom: 3,
                backgroundColor: '#2A2F32',
                borderRadius: 20,
                input: { color: '#EDEDED' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderRadius: 20, borderColor: '#2A2F32' },
                  '&:hover fieldset': { borderColor: '#3A444C' },
                  '&.Mui-focused fieldset': { borderColor: '#4A90E2' },
                },
              }}
            />

            <Typography variant="h6" sx={{ color: '#EDEDED', marginBottom: 2 }}>
              Recent Chats
            </Typography>

            <ContactList contacts={filteredContacts} onSelectContact={handleSelectContact} />
          </Box>
        </Box>

        {selectedContact && isSmallScreen ? (
          <Box
            sx={{
              backgroundColor: '#0B141A',
              zIndex: 10,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden',
            }}
          >
            <ChatWindow contactName={selectedContact} onBack={handleBack} />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
            {selectedContact ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#0B141A',
                  zIndex: 10,
                }}
              >
                <ChatWindow contactName={selectedContact} onBack={handleBack} />
              </Box>
            ) : (
              !isSmallScreen && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Typography variant="h5" sx={{ color: '#EDEDED', textAlign: 'center' }}>
                    Select a contact to start chatting!
                  </Typography>
                </Box>
              )
            )}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;