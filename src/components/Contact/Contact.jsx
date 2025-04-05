import ContactList from '../ContactList/ContactList';
import s from './Contact.module.css';

const Contact = ({ list, onDelete }) => {
  return (
    <ul className={s.list}>
      {list.map(item => {
        return (
          <ContactList
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default Contact;
