import React from "react";
import ReactDOM from "react-dom/client";
import { MoviePosterPage } from "./components/movie-poster-page";
import "./index.css";

type movie = {
	title: string;
	year: number; // Does it make more sense to have the "year" from type "string"?!
	image: string;
};

const movieArr: movie[] = [
	{
		title: "Wednesday",
		year: 2024,
		image: "./public/img/img01.jpg",
	},
	{
		title: "Avatar",
		year: 2023,
		image: "./public/img/img02.jpg",
	},
	{
		title: "Strange World",
		year: 2024,
		image: "./public/img/img03.jpg",
	},
	{
		title: "Violent Night",
		year: 2024,
		image: "./public/img/img04.jpg",
	},
];

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className=''>
			<MoviePosterPage
				movies={movieArr}
				pageNumber={0}
			/>
		</div>
	</React.StrictMode>
);
