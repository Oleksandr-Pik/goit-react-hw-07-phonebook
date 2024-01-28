import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { toast } from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList, getContactsFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('Delete contact successfully');
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem
                contact={contact}
                onDeleteContact={handleDeleteContact}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

export default ContactList;
