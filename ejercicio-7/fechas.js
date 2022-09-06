const today = new Date();
const birthday = new Date(1991, 10, 23);
const firstDate = today > birthday;
const dayBirthday = birthday.getDate();
const monthBirthday = birthday.getMonth() + 1;
const yearBirthday = birthday.getFullYear();