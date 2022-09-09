let list = ["lechuga", "tomate", "maíz", "cebolla", "esparragos"];
list.push("aceite");
list.pop();

let films = [
    {
        title: "If…",
        director: "Lindsay Anderson",
        year: 1968
    },
    {
        title: "Pi",
        director: "Darren Arofnosky",
        year: 1998
    },
    {
        title: "300",
        director: "Zack Snyder",
        year: 2007
    }
];

let modernFilm = films.filter(film => film.year > 2010);
let directors = films.map(film => film.director);
let titles = films.map(film => film.title);
let direcTitle = directors.concat(titles);
const prueba = [...directors, ...titles];