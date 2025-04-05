import { TbUserSearch } from 'react-icons/tb';
import { SlInfo } from 'react-icons/sl';
import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, filter, toggleImg, toggleResult }) => {
  const searchId = useId();
  return (
    <label htmlFor={searchId} className={s.label}>
      Find contacts by name:{' '}
      <input
        value={value}
        onChange={filter}
        id={searchId}
        name="searchName"
        className={s.input}
        placeholder="Search..."
      />
      {toggleImg === 0 && toggleResult > 0 ? (
        <>
          <SlInfo className={s.cross} />
          <p className={s.par}>No matches</p>
        </>
      ) : (
        <TbUserSearch className={s.icon} />
      )}
    </label>
  );
};

export default SearchBox;
