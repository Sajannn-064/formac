let myLeads = []
const inputBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let leadFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
let listItems="";
if(leadFromLocalStorage)   
{
    myLeads = leadFromLocalStorage
    renderLeads()
}

    inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        
       renderLeads()
        console.log( localStorage.getItem("myLeads"))
    } 
)
function renderLeads(){
    let listItems=""
        for(let i=0; i< myLeads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>  ${myLeads[i]} </a>
        </li> 
            `
        }
        ulEl.innerHTML=listItems
    }

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()

})