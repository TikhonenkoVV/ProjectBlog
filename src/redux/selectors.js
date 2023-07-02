export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectError = (state) => state.auth.error;
export const selectUserId = (state) => state.auth.user.id;
export const selectUserName = (state) => state.auth.user.userName;
export const selectUserEmail = (state) => state.auth.user.userEmail;
export const selectUserPhoto = (state) => state.auth.user.userPhoto;
