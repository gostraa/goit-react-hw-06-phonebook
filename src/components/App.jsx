import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Form />
      <p>Filter your contacts 😄</p>
      <Filter />
      <Contacts />
    </>
  );
};
