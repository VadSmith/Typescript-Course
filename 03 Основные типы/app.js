"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Вадим',
    surname: 'Кузнецов',
    city: 'Томск',
    age: 44
};
console.log(getFullName(user));
