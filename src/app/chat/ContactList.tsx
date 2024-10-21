import React, { useState } from 'react';
import { List, Box } from '@mui/material';
import ContactItem from './ContactItem';

export interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isRead: boolean;
}

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contactName: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const handleSelect = (contactName: string) => {
    setSelectedContact(contactName);
    onSelectContact(contactName);
  };

  return (
    <Box sx={{ height: 'calc(100% - 150px)', overflowY: 'auto' }}>
      <List>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onSelect={handleSelect}
            isSelected={selectedContact === contact.name}
          />
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
