const DisplayTodo = (props) => {

    const deleteTodoFormChild = (id) => {
        props.deleteTodoInParent(id);
    }

    const listTodo = props.childData;
    return (
        <div>
            <div>------List todo-------</div>
            {listTodo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => deleteTodoFormChild(item.id)}>{item.name}</div>
                )
            })}
        </div>
    )
}
export default DisplayTodo;