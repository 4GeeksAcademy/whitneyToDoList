import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [myList, setList] = useState([]);
    const url = 'https://playground.4geeks.com/apis/fake/todos/user/wheacock';

    const getTodos = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Invalid response');
            }

            const todos = await response.json();
            console.log(todos);

          
            setList(todos);
        } catch (error) {
            console.error('There was an error:', error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <h2>My Todo List</h2>
            <ul>
                {myList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
