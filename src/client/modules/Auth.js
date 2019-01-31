class Auth {

  /*todo need to create cookie communion instead localStorage*/

  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }
  static getToken() {
    return localStorage.getItem('token');
  }
}
export default Auth;
