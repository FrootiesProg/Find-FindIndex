/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  // Iterate through each object in the usersArray
  for (let i = 0; i < usersArray.length; i++) {
    // Check if the username property of the current object matches the provided username
    if (usersArray[i].username === username) {
      // If a match is found, return the current object
      return usersArray[i];
    }
  }
  // If no match is found, return undefined
  return undefined;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  // Find the index of the object with the specified username
  const index = usersArray.findIndex((user) => user.username === username);

  // If the index is found, remove the object from the array and return it
  if (index !== -1) {
    return usersArray.splice(index, 1)[0];
  }

  // If the index is not found, return undefined
  return undefined;
}
