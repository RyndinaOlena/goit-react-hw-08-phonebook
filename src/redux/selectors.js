export const selectContacts = state => state.phoneBookReducer.contacts.items;
export const selectIsLoading = state => state.phoneBookReducer.contacts.isLoading;
export const selectError = state => state.phoneBookReducer.contacts.error;
export const selectFilter = state => state.phoneBookReducer.filter;
