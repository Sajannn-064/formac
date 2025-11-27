let myLeads = []
const inputBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let listItems="";

    inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        
       renderLeads()
        console.log( localStorage.getItem("myLeads"))
    } 
)
function renderLeads(){
        console.log("nutton clicked")
        for(let i=0; i< myLeads.length; i++){
        // listItems += "<li><a target='_blank' href=' " + myLeads + "'>" + myLeads[i] + "</a></li> "
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>  ${myLeads[i]} </a>
        </li> 
            `
        }
        ulEl.innerHTML=listItems
    }
