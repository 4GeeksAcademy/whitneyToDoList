import React, { useEffect, useState } from "react";
import Todo from './Todo';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const apiUrl = "https://playground.4geeks.com/apis/fake/todos/user/wheacock";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("invalid response");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([
    "take kids to school",
    "do dishes",
    "prep for dinner",
    "clean house"
  ]);

  // Function to count tasks
  const countTasks = () => {
    return taskList.length;
  };

  return (
    <div className="container">
      <h1> My Todos</h1>

     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.label}</li>
          ))}
        </ul>
      )}

      
      <ul>
        <li>
          <div className="d-flex">
            <textarea
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Things to do"
            ></textarea>

            <button
              onClick={() => {
                setTaskList(taskList.concat([inputValue]));
                setInputValue("");
              }}
            >
              Add
            </button>
          </div>
        </li>

       
        {taskList.map((task, currentIndex) => (
          <li key={currentIndex}>
            {task}
            <i
              className="fa-regular fa-trash-can"
              onClick={() =>
                setTaskList(taskList.filter((t, index) => index !== currentIndex))
              }
            ></i>
          </li>
        ))}
      </ul>
      <div className="task">{countTasks()} tasks</div>
    </div>
  );
};

export default Home;



// import React, { useEffect, useState } from "react";





// const Home = () => {
// 	const [inputValue, setInputValue] = useState("")
// 	const [List, setList] = useState([])


// 	return (

// 		<div className="container">
// 			<h1> My Todos</h1>
// 			<ul>
// 				<li>
// 					<div className="d-flex">
// 						<textarea
// 							type="text"
// 							value={inputValue}
// 							onChange={(e) => setInputValue(e.target.value)}
// 							placeholder="Things to do">
// 						</textarea>

// 						<button onClick={() => {
// 							setList(List.concat([inputValue]));
// 							setInputValue("");
// 						}}>Add</button>

// 					</div>
// 				</li>


// 				{
//     List.map((task, currentIndex) => (
//         <li>
//             {task}
//             <i
//                 className="fa-regular fa-trash-can"
//                 onClick={() =>
//                     setList(
//                         List.filter(
//                             (t, index) => index !== currentIndex
//                         )
//                     )
//                 }
//             ></i>
//         </li>
//     ))
// }

				




// 			</ul>
// 			<div className="task">23 tasks </div>
// 		</div>

// 	)
// }


// export default Home;





