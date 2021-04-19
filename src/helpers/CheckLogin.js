export function isLoggedIn(login) {
  return (login.length < 2) ?
    false: 
    true;
}