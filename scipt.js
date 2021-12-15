

let todoItems = [
    {
        title:"go shopping",
        isFinished: false,
        isImportant: false,
    },

    {title:"do homeworl",
    isFinished: false,
    isImportant: false,

    }
];

let finishedItems = [];

function renderTodoItemList(todoItems, finishedItems) {
    
     let paneEL = document.querySelector("#todolist>.list-pane");
     paneEL.innerHTML ="";
     for (let i=0; i< todoItems.length; i++) {
         let item = todoItems[i];
         let itemDiv = document.createElement("div");
         itemDiv.className = "todo-item";

         let inputEl = document.createElement("input");
         inputEl.type = "checkbox";

         comsole.log("finished:",i,todoItems,finishedItems );
         renderTodoItemList(todoItems,finshedItems);
     }}