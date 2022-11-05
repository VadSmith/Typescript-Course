function getFullName(userEntity: { firstname: string, surname: string }): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}


const user = {
  firstname: 'Вадим',
  surname: 'Кузнецов',
  city: 'Томск',
  age: 44
}

console.log(getFullName(user));