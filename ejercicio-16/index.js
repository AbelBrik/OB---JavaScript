const tasks = document.querySelectorAll("p")
const lists = document.querySelectorAll("section")
const trash = document.querySelector("svg")

tasks.forEach(task => {
    task.addEventListener("dragstart", e => {
        task.classList.add("dragging")
        e.dataTransfer.setData("id", task.id)
    })
    task.addEventListener("dragend", () => task.classList.remove("dragging"))
});

lists.forEach(list => {
    list.addEventListener("dragover", e => e.preventDefault())
    list.addEventListener("drop", e => list.appendChild(document.getElementById(e.dataTransfer.getData("id"))))
});

trash.addEventListener("dragover", e => e.preventDefault())
trash.addEventListener("drop", e => document.getElementById(e.dataTransfer.getData("id")).remove())
