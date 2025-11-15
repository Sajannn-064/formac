//const Myage = 20;
//console.log(Myage);
// var a1=5;
// a1=10;

// console.log(a1);
let count = 0
let countEL = document.getElementById("count-el")
function increment() {
    console.log("Tthe button was clicked");
    count += 1;
    countEL.innerHTML = count;

}
let saveEl = document.getElementById("save-el-text")  
console.log(count)      


function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr;  
    count = 0
    countEL.innerHTML = count
}
