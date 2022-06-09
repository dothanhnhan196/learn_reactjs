const AddTodo = (props) => {
    const { todo, setTodo, handeOnClick } = props;
    return (
        <div>
            <label>Todo's name</label>
            <input value={todo} type='text' onChange={(event) => setTodo(event.target.value)} />
            <button type='button' onClick={() => { handeOnClick() }}>Submit</button>
        </div>
    )
}

export default AddTodo;