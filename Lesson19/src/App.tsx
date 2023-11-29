import './App.css';
import TaskList from './components/TaskList';
import React, {useState} from 'react';
import Item from './model/Item';
import TaskForm from './components/TaskForm';

function App() {

  const [ items , setItems ] = useState<Item[]>([])

  const RandomID = () =>{
    return Math.floor(Math.random()*100)
  }

  const addItem = (name:string) => {
    setItems([...items,{id:RandomID(),name}])
    
  }

  return (
    <div className="App">
      <TaskForm onAddItem = {addItem}/>
      <TaskList item={items}/>
    </div>
  );
}

export default App;
