let inputBtn = document.getElementById('input-btn');
let resetBtn =document.getElementById('reset-btn');
let list = document.getElementById("task-list");
let input = document.getElementById("task-input");


inputBtn.addEventListener('click' , ()=>{
    
    if(input.value === ""){
        alert('please add')
        return;
    }
    const task = loadTodos();
    task.push(input.value);
    saveTodos(task);
    displayTodos(task);
    input.value ='';
    

})
function displayTodos(task){
    list.innerHTML='';
    task.forEach((element) => {
        list.innerHTML+=
        `<li>${element}</li>`;
    });

}
resetBtn.addEventListener('click' , ()=>{
    input.value="";
    list.innerHTML="";
    localStorage.removeItem('task');
})
function saveTodos(task){
    localStorage.setItem('task', JSON.stringify(task));
}
function loadTodos(){
    const task = JSON.parse(localStorage.getItem('task')) || [];
    return task;
}
window.onload = ()=>{
    const task = JSON.parse(localStorage.getItem('task')) || [];
    displayTodos(task);
}
displayTodos();




