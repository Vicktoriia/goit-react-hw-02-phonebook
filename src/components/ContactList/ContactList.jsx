import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        contact={{ id, name, number }}
        onDelete={onDelete}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
