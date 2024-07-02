import React from "react";

type poster = {
	title: string;
	year: number; // Does it make more sense to have the "year" from type "string"?!
	image: string;
};

type Props = {
	posters: poster[];
	pageNumber: number;
    singlePoster: poster
};

const displayPerClick = 4;

let displayPosters: poster[];

function Poster({singlePoster}: Props){
    return (
		<div className='relative group'>
			<img
				src={singlePoster.image}
				alt={singlePoster.title}
				className='w-full h-auto'
			/>
			<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
				<h3 className='text-lg'>{singlePoster.title}</h3>
				<p>{singlePoster.year}</p>
			</div>
		</div>
	);
}

function MoviePosterDisplay({ posters, pageNumber }: Props) {
	for (let step = (pageNumber - 1) * displayPerClick; step < pageNumber * displayPerClick; step++) {
		displayPosters.push(posters[step]);
	}
    return (

    )
}


export default MoviePosterDisplay;
