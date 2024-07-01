import ReactDOM from "react-dom/client";

import "./index.css";

import TabButton from "./components/tab-buttton";
import React, { useState } from "react";

// src/App.js
import "./App.css";

const App = () => {
	const [selected, setSelected] = useState("Cast");

	// Define the function that will be passed as a prop
	const handleTabButtonClick = (label: string) => {
		setSelected(label);
	};

	return (
		<div className='flex space-x-4'>
			<TabButton
				lable='Cast'
				isSelected={selected === "Cast"}
				clickedOn={handleTabButtonClick} // Pass the function as a prop
			/>
			<TabButton
				lable='Crew'
				isSelected={selected === "Crew"}
				clickedOn={handleTabButtonClick} // Pass the function as a prop
			/>
		</div>
	);
};

export default App;

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className='bg-dark p-20 h-screen grid grid-cols-4 gap-20'>
			<div className='bg-dark-light'></div>
			<div className='bg-white'></div>
			<div className='bg-white-dimmed'></div>
			<div className='bg-white-dimmed-heavy'></div>
			<div className='bg-yellow'></div>
			<div className='bg-red'></div>
			<div className='bg-green'></div>
		</div>
	</React.StrictMode>
);
