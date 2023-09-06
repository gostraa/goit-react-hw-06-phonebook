import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getStateContacts } from 'redux/selectors';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(getStateContacts);

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
