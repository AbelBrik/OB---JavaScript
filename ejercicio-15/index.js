const name = "Abel"
const surname = "Brik"
const pers1 = {name, surname}
sessionStorage.setItem("pers1", JSON.stringify(pers1))
localStorage.setItem("pers1", JSON.stringify(pers1))

document.cookie = `persCad=${JSON.stringify(pers1)};expires=${new Date((new Date()).getTime() + 120000)}`