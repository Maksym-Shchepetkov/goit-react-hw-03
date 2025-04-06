import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import contactData from '../../assets/contacts.json';
import { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import ContactForm from '../ContactForm/ContactForm';

const App = () => {
  const [contactsList, setContactsList] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) ?? '[]';

    return savedContacts.length === 0 ? contactData : savedContacts;
  });
  const [searchBy, setSearchBy] = useState('');

  const filteredValue = contactsList.filter(item =>
    item.name.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
  );

  const handleAddList = setValue => {
    setContactsList(prevList => {
      return [...prevList, setValue];
    });
  };

  const handleFilterValue = e => {
    const value = e.target.value;

    return setSearchBy(value);
  };

  const handleDeleteItem = deleteId => {
    setContactsList(prevTasks => {
      return prevTasks.filter(task => task.id !== deleteId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  return (
    <div className={s.wrapper}>
      <ContactForm onAdd={handleAddList} />
      <SearchBox
        value={searchBy}
        filter={handleFilterValue}
        toggleImg={filteredValue.length}
        toggleResult={contactsList.length}
      />
      <Contact list={filteredValue} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
