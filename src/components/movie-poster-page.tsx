import React from "react";
import { PageButton } from "./PageButton";

type movie = {
	title: string;
	year: number; // Does it make more sense to have the "year" from type "string"?!
	image: string;
};

type Props = {
	movies: movie[];
	pageNumber: number;
	// singlePoster: movie;
};

// const displayPerPage = 4;

// let displayPosters: movie[];

// pageNumber needs to be retrived from somewhere
export function MoviePosterPage({ movies, pageNumber }: Props) {
	// for (
	// 	let step = (pageNumber - 1) * displayPerPage;
	// 	step < pageNumber * displayPerPage;
	// 	step++
	// ) {
	// 	displayPosters.push(posters[step]);
	// }
	return (
		<div className='bg-dark px-5 h-screen rounded-2xl'>
			<div className=' grid grid-cols-2 grid-rows-2 gap-5 py-8 '>
				{movies.map((movie) => {
					return (
						<div className='relative group h-full '>
							<img
								src={movie.image}
								alt={movie.title}
								className='w-full h-full object-cover'
							/>
							<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
								<h3 className='text-lg'>{movie.title}</h3>
								<p>{movie.year}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='flex justify-between'>
				<PageButton page={1} />
				<PageButton page={2} />
				<PageButton page={3} />
				<PageButton page={4} />
				<PageButton page={5} />
			</div>
		</div>
	);
}
