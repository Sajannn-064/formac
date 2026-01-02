const listEL= document.getElementById("todo-list")
const inputEl=document.getElementById("todo-input")
const outputEl= document.getElementById("output")

//get todos

async function getTodos(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data= await res.json();
    //render
    listEL.innerHTML =""
    data.forEach(todo=>{
        const li= document.createElement("li");
        li.textContent= todo.title
        listEL.appendChild(li)
    });
    return data
}
async function addTodo(title){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });

    const created = await res.json();
    //show server response
    outputEl.textContent = JSON.stringify(created, null, 2);
    //add the created todo to the list instantly
    const li = document.createElement("li")
    li.textContent = created.title
    listEL.appendChild(li)
    return created
}
//event and button clicks
document.getElementById("load-btn").addEventListener("click", getTodos)
document.getElementById("create-btn").addEventListener("click", () => {
    const title = inputEl.value.trim()
    if (!title) return
    addTodo(title)
    inputEl.value = ""
})