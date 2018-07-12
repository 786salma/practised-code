var inputValue = document.getElementById('taskValueId')
var counter = 1
addTask = function () {
    if (localStorage.getItem("taskCounter") === null) {
        localStorage.getItem("taskCounter", counter)
    } else {
        var counter1 = localStorage.getItem("taskCounter")
    }
    var currentTask = inputValue.value
    console.log("saving task")
    localStorage.setItem("task_" + counter, currentTask)
    inputValue.value = ""
    localStorage.setItem("taskCounter", ++counter)
    loadTask()
}
function loadTask() {
    console.log("loading tasks")
    var container = document.getElementById("taskCounter")
    container.innerHTML = ""
    var newul = document.createElement("ol")
    container.appendChild(newul)
    var maxcounter = localStorage.getItem("taskCounter")
    for (var i = 1; i < maxcounter; i++) {
        var newli = document.createElement("li")
        var currentTask = localStorage.getItem("task_", +i)
        newli.innerHTML = currentTask
        newul.appendChild(newli)
    }

}