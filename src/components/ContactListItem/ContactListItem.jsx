// import { Container } from 'components/App/App.styled';
import { Container } from './ContactListItem.styled';
import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <Container>
    <p>
      {contact.name}: {contact.number}{' '}
    </p>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </Container>
);

export default ContactListItem;
