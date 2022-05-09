import TodoDisplay from './todo-display';
import React,{useState} from 'react';
import './App.css';
import data from './data.json'
import Header from './header';
import TodoForm from './todo-form';
function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  const removeFromList=(id)=>{
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const removeElementCompleted=()=>{
    let filtered=toDoList.filter((data)=>{
      return data.complete===false;
    })
    setToDoList(filtered);
  }
  return (
    <div>
    <Header/>
    <TodoDisplay toDoList={toDoList} removeFromList={removeFromList} removeElementCompleted={removeElementCompleted}/>
    <TodoForm addTask={addTask}/>
    </div>

  );
}

export default App;
