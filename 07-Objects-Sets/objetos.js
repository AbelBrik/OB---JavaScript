const dates = {
    name: "Abel",
    surname: "Brik",
    age: "30",
    height: "170",
    isDev: true
}
const friend1 = {
    name: "Pepito",
    surname: "Gargollo",
    age: "37",
    height: "185",
    isDev: false
}
const friend2 = {
    name: "Casper",
    surname: "Blanco",
    age: "24",
    height: "165",
    isDev: true
}
const age = dates.age;
const list = [{...dates}, {...friend1}, {...friend2}]
const orderList = list.sort((young, old) => old.age - young.age);