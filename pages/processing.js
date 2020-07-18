import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';
import Loading from '../src/components/Loading';

export default function Processing() {
	const [progress, setProgress] = useState(50);
	const [count, setCount] = useState(0);
	const [index, setIndex] = useState([]);
	const [img, setImg] = useState('/여수 낭만포차.png');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		let temp, rnum;
		for (let i = 0; i < 10; i++) index.push(i);
		for (let i = 0; i < index.length; i++) {
			rnum = Math.floor(Math.random() * 10);
			temp = index[i];
			index[i] = index[rnum];
			index[rnum] = temp;
		}
		setIndex(index);
	}, []);

	const getImg = async () => {
		console.log(index);
		await axios
			.get(
				'http://ec2-52-79-228-174.ap-northeast-2.compute.amazonaws.com:8000/sample-data/'
			)
			.then((res) => {
				console.log(res.data[index[count]].sample_img);
				setImg(res.data[index[count]].sample_img);
				console.log(index[count]);
				setCount(count + 1);
			})
			.catch((err) => console.log(err));

		setProgress(progress + 10);

		if (progress == 100) {
			setLoading(true);
			setTimeout(function () {
				Router.push('/single');
			}, 2000);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<ProgressBarWrapper>
						<ProgressBar num={progress} />
					</ProgressBarWrapper>

					<Wrapper>
						<Img2 src={img}></Img2>
						<Bottom>
							<Button onClick={() => getImg()}>
								<Img src="/x.png" />
							</Button>
							<Button onClick={() => getImg()}>
								<Img src="/heart.png" />
							</Button>
						</Bottom>
					</Wrapper>
				</>
			)}
		</>
	);
}
const ProgressBarWrapper = styled.div`
	position: fixed;
	width: 100%;
	max-width: 37.5rem;
	background-color: white;
`;
const ProgressBar = styled.div`
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
	height: fit-content;
	min-height: 51.6rem;
	display: flex;
	flex-direction: column;
`;
const Bottom = styled.div`
	display: flex;
	padding: 5rem;
	align-items: center;
	width: 37.5rem;
	height: 12rem;
	position: fixed;
	bottom: 0rem;
	background-color: white;
`;
