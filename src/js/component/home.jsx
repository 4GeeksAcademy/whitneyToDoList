
import React, { useEffect, useState } from "react";





const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [List, setList] = useState([])


	return (

		<div className="container">
			<h1> My Todos</h1>
			<ul>
				<li>
					<div className="d-flex">
						<textarea
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Things to do">
						</textarea>

						<button onClick={() => {
							setList(List.concat([inputValue]));
							setInputValue("");
						}}>Add</button>

					</div>
				</li>


				{
    List.map((task, currentIndex) => (
        <li>
            {task}
            <i
                className="fa-regular fa-trash-can"
                onClick={() =>
                    setList(
                        List.filter(
                            (t, index) => index !== currentIndex
                        )
                    )
                }
            ></i>
        </li>
    ))
}

				




			</ul>
			<div className="task">23 tasks </div>
		</div>

	)
}


export default Home;



// const Home = () => {
// 	return (
// 		<div className="text-center">
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// );i class="fa-regular fa-trash-can"></i>
// };


