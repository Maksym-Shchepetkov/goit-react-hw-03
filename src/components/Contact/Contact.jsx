import ContactList from '../ContactList/ContactList';
import s from './Contact.module.css';

const Contact = ({ list, onDelete }) => {
  return (
    <ul className={s.list}>
      {list.map(item => {
        return (
          <li className={s.item} key={item.id}>
            <ContactList
              id={item.id}
              name={item.name}
              number={item.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
