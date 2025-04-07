import { BiSolidUser } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import s from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
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
    </>
  );
};

export default Contact;
