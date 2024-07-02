import React from "react";
import Poster from "./poster-component";

type poster = {
	title: string;
	year: number; // Does it make more sense to have the "year" from type "string"?!
	image: string;
};

type Props = {
	posters: poster[];
	pageNumber: number;
	singlePoster: poster;
};

const displayPerClick = 4;

let displayPosters: poster[];

// pageNumber needs to be retrived from somewhere
function MoviePosterDisplay({ posters, pageNumber }: Props) {
	for (
		let step = (pageNumber - 1) * displayPerClick;
		step < pageNumber * displayPerClick;
		step++
	) {
		displayPosters.push(posters[step]);
	}
	return (
		<div>
			<Poster></Poster>
		</div>
	);
}

export default MoviePosterDisplay;
