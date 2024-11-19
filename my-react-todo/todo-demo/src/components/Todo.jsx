import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";


// 解構props的屬性名稱，用{屬性名}包起來
function Todo({ todo, deleteTodo, toggleCompleted }) {

    return (

        // 新增一個completed類別規則
        // 使用反引號+三元運算子檢查isCompleted
        // 如果為真=>套用completed類別規則
        // 如果為否=>套用completed類別規則  =>''
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* <p>上課中</p> */}
            {/* <p>{todo}</p> */}
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>

            <div>
                <RiEdit2Fill style={{ cursor: 'pointer' }} />
                <RiDeleteBinFill
                    onClick={() => { deleteTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '5px' }} />
            </div>

        </div>
    )
}

export default Todo