
let saveEl= document.getElementById("save-el")
let countEl =document.getElementById("count-el");
let count = 0
let rest =document.getElementById(rest)
function increment() {
    count +=1 ;
    countEl.textContent=count;
}
function save() {
    
    let  prevCount =count + " - "
    saveEl.textContent +=prevCount;
    console.log(count)
}
function restBtn() {
    countEl.textContent =0
    saveEl.textContent="Previous Count :"
}