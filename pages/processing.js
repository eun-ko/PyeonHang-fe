import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ProgressBar } from 'react-bootstrap';
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
		<Wrapper>
			{/*{isLoading ? <Loader>Loading...</Loader> : <Img2 src="/pic.png"></Img2>}*/}
			<Img2 src="/pic.png"></Img2>
			<Row>
				<Link href="/processing">
					<Img src="/x.png" />
				</Link>
				<Link href="/result">
					<Img src="/heart.png" />
				</Link>
			</Row>
		</Wrapper>
	);
}
const LeftButton = styled.button`
	width: 8rem;
	height: 8rem;
	border: none;
	font-size: 2rem;
	color: #f59f00;
	background-color: white;
	border-radius: 2.5rem;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
const RightButton = styled.button`
	width: 4rem;
	height: 4rem;
	margin-left: 14rem;
	border: none;
	font-size: 2rem;
	color: #3366ff;
	background-color: white;
	border-radius: 2.5rem;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
const Img = styled.img`
	width: 8rem;
	height: 8rem;
`;
const Img2 = styled.img`
	width: 100%;
	height: auto;
`;
const Wrapper = styled.div`
	width: 100%;
	//height: fit-content;
	min-height: 51.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Row = styled.div`
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

const Title = styled.p`
	font-size: 1.5rem;
	margin-bottom: 3rem;
	font-weight: bold;
	color: #3366ff;
`;
const Loader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
