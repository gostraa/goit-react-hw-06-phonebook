import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: (state, action) => {
      const isExist = state.find(
        el =>
          el.name.toLowerCase() === action.payload.name.toLowerCase() ||
          el.number === action.payload.number
      );

      if (isExist) {
        alert('This contact already exists 😮');
        return state;
      }
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts } = contactsSlice.actions;
export const { deleteContact } = contactsSlice.actions;
