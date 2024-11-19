import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    // 因為有N個todo，所以使用陣列存取
    // const [todos, setTodos] = useState(['List1', 'List2']);
    // 因為陣列需要key屬性，所以要改成陣列物件加上id
    // const [todos, setTodos] = useState([
    //     { content: "List1", id: Math.random() },
    //     { content: "List2", id: Math.random() },
    // ]);


    // 因為要判定todo是否有被點擊，所以要增加一個標記屬性=>isCompleted

    const [todos, setTodos] = useState([
        { content: "List1", id: Math.random(), isCompleted: false },
        { content: "List2", id: Math.random(), isCompleted: false },
    ]);




    // 建立加入新的todo內容
    // 1.使用...其餘運算子來保留原陣列內容
    // 2.再加入新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false }])

    }


    // 建立刪除todo函式，傳給todo元件使用
    // 使用filter方法，去除被刪除的todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 檢查目前的id是否為被刪除的id
            // 如果不是，則保留
            return todo.id !== id
        }))
    }


    // 建立雙向(toggle)切換 「完成雨取消」的函式
    const toggleCompleted = (id) => (
        setTodos(todos.map((todo) => {
            // 檢被點擊的id是否跟目前陣列中的id一樣
            // Yes =>  1.取出todo  2.將isCompleted屬性質反向處理(true->false / false->true)
            // No  =>  todo不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))

    )




    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                })
            }

        </div>
    )
}


export default TodoWrapper