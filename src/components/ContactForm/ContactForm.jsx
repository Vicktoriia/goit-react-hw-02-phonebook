import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  NameId = nanoid();
  NumberId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.NameId}>
          Name
          <input
            id={this.NameId}
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required={true}
          />
        </Label>
        <Label htmlFor={this.NumberId}>
          Number
          <input
            id={this.NumberId}
            value={this.state.number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required={true}
          />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    );
  };
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
