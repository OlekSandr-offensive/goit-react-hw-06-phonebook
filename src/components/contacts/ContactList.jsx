import './ContactList.scss';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  //cod filter
  return {
    contacts: state.contacts.items.contacts,
  };
};

// const mapDispatchToProps = {};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, null)(ContactList);
