import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import axios from 'axios';

export default function Processing() {
	const [isLoading, setLoading] = useState(false);
	const [rating, setRating] = useState(0);
	// const getImg = async() = {
	// await axios
	// 	.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
	// 	.then(
	// 		({
	// 			data: {
	// 				data: { movies },
	// 			},
	// 		}) => {
	// 			//console.log(movies);
	// 			setRating(rating+i);
	// 			// setMovies(movies);하면 왜 안되는지
	// 			setLoading(false);
	// 		}
	// 	);
	// };
	// useEffect(() => {
	// 	getImg();
	// }, []);
	return (
		<>
			<ProgressBar />
			<Wrapper>
				{/*{isLoading ? <Loader>Loading...</Loader> : <Img2 src="/pic.png"></Img2>}*/}
				<Img2 src="/pic.png"></Img2>
				<Bottom>
					<Link href="/processing">
						<Img src="/x.png" />
					</Link>
					<Link href="/result">
						<Img src="/heart.png" />
					</Link>
				</Bottom>
			</Wrapper>
		</>
	);
}
const ProgressBar = styled.div`
	position: fixed;
	width: 24rem;
	height: 0.4rem;
	background-color: #007aff;
`;
const Img = styled.img`
	width: 8rem;
	height: 8rem;
`;
const Img2 = styled.img`
	width: 37.5rem;
	height: 51.6rem;
`;
const Wrapper = styled.div`
	width: 100%;
	margin-top: 0.4rem;
	//height: fit-content;
	min-height: 51.6rem;
	display: flex;
	flex-direction: column;
`;
const Bottom = styled.div`
	display: flex;
	padding: 5rem;
	justify-content: space-between;
	align-items: center;
	width: 37.5rem;
	height: 12rem;
	position: fixed;
	bottom: 0rem;
	background-color: white;
`;
