import { log } from 'console';
import React, { useRef } from 'react'

interface TaskFormProp {
    onAddItem:(name:string)=>void
}

function TaskForm({onAddItem}:TaskFormProp): JSX.Element {

    const inputRef = useRef<HTMLInputElement> (null)

    const saveData = (e:React.FormEvent) => {
        e.preventDefault();
        // console.log(inputRef);
        const name = inputRef.current!.value
        onAddItem(name);
        inputRef.current!.value = ""
    }

    return (
        <div>
            <form action="" onSubmit={saveData}>
                <input type="text" placeholder='ป้อนงาน' ref={inputRef}/>
                <button type="submit">บันทึก</button>
            </form>
        </div>
    )
}

export default TaskForm