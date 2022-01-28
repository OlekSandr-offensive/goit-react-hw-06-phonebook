import './App.css';

import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';

// import useLocalStorage from './hooks/useLocalStorage';
// import initialContacts from './contacts.json';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

  // const FormSubmitHandler = ({ name, number }) => {
  //   const findContact = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (findContact) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     const AddContact = {
  //       id: shortid.generate(),
  //       name: name,
  //       number: number,
  //     };
  //     setContacts(contacts => [AddContact, ...contacts]);
  //   }
  // };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
