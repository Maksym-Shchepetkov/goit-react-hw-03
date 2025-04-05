import { BiSolidUser } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import s from './ContactList.module.css';

const ContactList = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.info}>
        <p className={s.par}>
          {<BiSolidUser className={s.icon} />}
          {name}
        </p>
        <p className={s.par}>
          {<FaPhone className={s.icon} />}
          {number}
        </p>
      </div>

      <div className={s.buttonCont}>
        <button onClick={() => onDelete(id)} className={s.button}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactList;
