let myLeads = []
const inputBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let leadFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
let listItems="";
if(leadFromLocalStorage)   
{
    myLeads = leadFromLocalStorage
    render(myLeads)
}
function render(Leads){            //takes data from the leads and make a list and changes the dom "DOM"
    let listItems=""
        for(let i=0; i< Leads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${Leads[i]}'>  ${Leads[i]} </a>
        </li> 
            `
        }
        ulEl.innerHTML=listItems
    }
    inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        
       render(myLeads)
        console.log( localStorage.getItem("myLeads"))
    }
)
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }) 
})