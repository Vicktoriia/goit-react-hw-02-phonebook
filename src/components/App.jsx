import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (!this.validateContact(contact)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    return contact.id;
  };

  validateContact = ({ name }) => {
    const { contacts } = this.state;
    const validateName = name.toLowerCase();

    return !contacts.some(({ name }) =>
      name.toLowerCase().includes(validateName)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const validateFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(validateFilter)
    );
  };

  render = () => {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}

          {visibleContacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          ) : (
            <Notification message="There is no contacts" />
          )}
        </Section>
      </div>
    );
  };
}

export default App;
