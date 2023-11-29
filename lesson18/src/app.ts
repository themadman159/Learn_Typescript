const btnElement = document.getElementById("btn")! as HTMLButtonElement
const inputElement = document.getElementById("input")! as HTMLInputElement
const formElement = document.getElementById("form")!
const listElement = document.getElementById("list")!

interface Task {
    name : string , 
    completed: boolean
}

const readData = ():Task[] => {
    const GetData = localStorage.getItem("Mylist")
    if (GetData == null) return []
    return JSON.parse(GetData)
}

const tasks:Task[] = readData()

const saveData = (e:SubmitEvent) => {
    e.preventDefault()
    // console.log(inputElement.value);
    const newTask:Task = {
        name:inputElement.value,
        completed: false
    }
    createList(newTask)
    tasks.push(newTask)
    localStorage.setItem("Mylist",JSON.stringify(tasks))
}

const updateData = () => {
    localStorage.setItem("Mylist",JSON.stringify(tasks))
}

const createList = (task:Task) => {
    const LiEl = document.createElement("li")

    const checkboxElement = document.createElement("input")
    checkboxElement.type = "checkbox"
    checkboxElement.checked = task.completed
    checkboxElement.addEventListener("change",()=>{
        task.completed = checkboxElement.checked
        updateData()
    })
    LiEl.append(task.name)
    LiEl.append(checkboxElement)
    listElement.append(LiEl)
    inputElement.value = ""
}
formElement.addEventListener("submit",saveData)

tasks.forEach(createList)



