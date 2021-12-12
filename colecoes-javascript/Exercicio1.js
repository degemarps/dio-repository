// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

const users = new Map();

function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') admins.push(key);
  }
  return admins;
}

users.set('Luiz', 'Admin');
users.set('Pedro', 'Admin');
users.set('Maria', 'User');
users.set('Carlos', 'User');
users.set('Natália', 'Admin');
users.set('Jorge', 'Admin');

console.log(getAdmins(users));