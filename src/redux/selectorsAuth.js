export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectUserEmail = state => state.auth.user.email;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;