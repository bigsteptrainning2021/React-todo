import React from "react";

function TodoDisplay({toDoList,removeFromList,removeElementCompleted}){

    const removeFromLists=(e)=>{
        removeFromList(e.currentTarget.id);
    }
    return(
        <div>
            {toDoList.map(todo => {
                return (
                   <div className={todo.complete ? "todo strike" : "todo"} id={todo.id} onClick={removeFromLists}>{todo.task}</div>
            )
        }
            )}
            <button onClick={removeElementCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoDisplay;