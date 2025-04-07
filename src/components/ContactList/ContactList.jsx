import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {list.map(item => {
          return (
            <li className={s.item} key={item.id}>
              <Contact
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
