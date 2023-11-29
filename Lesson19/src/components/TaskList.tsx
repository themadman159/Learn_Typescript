import React from 'react'
import Item from '../model/Item'

interface TaskListProps {
    item: Item[]
}

function TaskList(props:TaskListProps): JSX.Element {
    
    return (
        <div>
            <h1>งานที่ต้องทำ</h1>
            <ul>
                {props.item.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList