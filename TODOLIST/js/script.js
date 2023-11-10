const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 let taskarr=[];    
function addTask() {
    if (inputBox.value === "") {
        alert("you must write somwthing wrong!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7 ";
        li.appendChild(span);
    }
    inputBox.value = "";
    save();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();

    }
}, false); 
function save(){
    localStorage.setItem("data",listContainer.innerHTML);
    console.log(listContainer.child);
}
function show(){
    console.log(localStorage.getItem("data"));
listContainer.innerHTML=localStorage.getItem("data");

}
show();