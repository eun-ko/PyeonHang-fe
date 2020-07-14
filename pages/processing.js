import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function Processing() {
	const [progress, setProgress] = useState(60);
	//const [img, setImg] = useState(null);

	//const handleProgressBar = () => {
	//	setProgress(progress + 10);
	//};
	//const getImg = async () => {
	//	const img = await axios
	//		.get(process.env.local.API_HOST + '/sample-data')
	//		.then((res) => {
	//			console.log(res);
	//			handleProgressBar();
	//			return res.data.sample_img;
	//		})
	//		.catch((err) => console.log(err));
	//	setImg(img);
	//};

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
			<ProgressBar num={progress} />
			<Wrapper>
				{/*<Img2 src={img}></Img2>*/}
				<Bottom>
					<Button onClick={() => Router.push('/single')}>
						<Img src="/x.png" />
					</Button>
					<Button onClick={() => Router.push('/single')}>
						<Img src="/heart.png" />
					</Button>
				</Bottom>
			</Wrapper>
		</>
	);
}
const ProgressBar = styled.div`
	position: fixed;
	width: ${(props) => (props.num ? props.num : 0)}%;
	height: 0.5rem;
	background-color: #007aff;
`;
const Button = styled.button`
	:focus {
		outline: 0;
	}
	border: none;
	background: none;
`;
const Img = styled.img`
	width: 8rem;
	height: 8rem;
	margin-right: 9rem;
`;
const Img2 = styled.img`
	width: 100%;
	height: auto;
`;
const Wrapper = styled.div`
	width: 100%;
	margin-top: 0.5rem;
	//height: fit-content;
	min-height: 51.6rem;
	display: flex;
	flex-direction: column;
`;
const Bottom = styled.div`
	display: flex;
	padding: 5rem;
	align-items: center;
	width: 100%;
	height: 12rem;
	position: fixed;
	bottom: 0rem;
	background-color: white;
	//왜 밖으로 나가지..?
`;
