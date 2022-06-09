import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const Home = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: 'Watching youtube' },
            { id: 'todo2', name: 'Using facebook' },
            { id: 'todo3', name: 'Reading book' },
        ]
    );


    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handeOnClick = () => {
        if (!todo) {
            alert("Todo's name is not empty");
            return;
        }

        let todoID = randomIntFromInterval(4, 999)
        let todoItem = {
            id: `todo${todoID}`, name: todo
        }
        setListTodo([...listTodo, todoItem]);
        setTodo("");
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id)
        setListTodo(currentTodoList);
    }

    const myInfo = {
        name: 'Nhan',
        age: 26,
    }

    // props, state: object(key: value)
    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handeOnClick={handeOnClick}
            />
            <br />
            <br />
            <DisplayTodo
                childData={listTodo} /* x = y => x <- y */
                myInfo={myInfo}
                deleteTodoInParent={handleDeleteTodo}
            />
        </div>
    )
}
export default Home;