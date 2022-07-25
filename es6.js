const some_function = (username, password) =>
{
 return new Promise((resolve, reject) =>
 {
  /*stuff using username, password*/
  console.log('username' + username)
  console.log('password' + password)
  if ( /* everything turned out fine */ )
  {
   resolve("Stuff worked!");
  }
  else
  {
   reject(Error("It broke"));
  }
 });
};

some_function('Caue', 'senha');