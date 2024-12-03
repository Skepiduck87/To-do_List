const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert("Please Input Something");
    }
    else{
        console.log("how");
        let item = document.createElement("li");
        item.innerHTML = inputBox.value;
        listContainer.appendChild(item);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
        saveData();
    }
    inputBox.value="";
}
inputBox.addEventListener("keypress",function(e){
    if (e.key === "Enter") {
        addtask();
    }
})
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();