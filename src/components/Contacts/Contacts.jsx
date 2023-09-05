import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice/ContactsSlice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h2>Contacts</h2>
      <ul className="col-sm-3">
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
