const getToys = (state: any) => state.toys.toyList;
export const toysSelectors = {
  getToys
}
/*const getUserName = (state: any) => state.auth.user.fullName;
const getError = (state: any) => state.auth.auth.loginError;
const getUserToken = (state: any) => state.auth.user.accessToken;
const getLoadingAuth = (state: any) => state.auth.user.loginInProgress;
const getLoadingReserveCode = (state: any) => state.auth.auth.isReserveCodeCompiling;

export const usersSelectors = {
  getRole,
  getUserName,
  getError,
  getUserToken,
  getLoadingAuth,
  getLoadingReserveCode,
};
export const authSelectors = {
  getLoadingAuth,
  getLoadingReserveCode,
};
*/