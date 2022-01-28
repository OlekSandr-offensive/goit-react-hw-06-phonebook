import './ContactList.scss';
import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <>
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}:<span>{number}</span>
          </p>
          <button type="button" onClick={() => onDeleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(deleteContacts(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
