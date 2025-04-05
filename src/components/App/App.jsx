import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import contactData from '../../assets/contacts.json';
import { useState } from 'react';
import Contact from '../Contact/Contact';
import ContactForm from '../ContactForm/ContactForm';
const App = () => {
  const [contactsList, setContactsList] = useState(contactData);
  const [searchBy, setSearchBy] = useState('');
  const [hovered, setHovered] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const filteredValue = contactsList.filter(item =>
    item.name.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
  );

  const handleFilterValue = e => {
    const value = e.target.value;

    return setSearchBy(value);
  };

  const handleDeleteItem = deleteId => {
    setContactsList(onDelete => {
      return onDelete.filter(task => task.id !== deleteId);
    });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.paper}>
          <ContactForm
            hovered={hovered}
            onHover={setHovered}
            openForm={formOpen}
            onClick={setFormOpen}
          />
          <div className={s.openBookBefore}>
            <div className={s.openBook}>
              <SearchBox
                value={searchBy}
                filter={handleFilterValue}
                toggleImg={filteredValue.length}
                toggleResult={contactsList.length}
              />
              <Contact list={filteredValue} onDelete={handleDeleteItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
