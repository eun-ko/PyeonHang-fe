import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Loading from '../src/components/Loading';

export default function Processing() {
	const [progress, setProgress] = useState(0);
	const [count, setCount] = useState(0);
	const [index, setIndex] = useState([]);
	const [img, setImg] = useState();
	const [isLoading, setLoading] = useState(false);
	const imgArr = new Array();
	imgArr[0] = '/processingimg/1.png';
	imgArr[1] = '/processingimg/2.png';
	imgArr[2] = '/processingimg/4.png';
	imgArr[3] = '/processingimg/6.png';
	imgArr[4] = '/processingimg/8.png';
	imgArr[5] = '/processingimg/10.png';
	imgArr[6] = '/processingimg/13.png';
	imgArr[7] = '/processingimg/15.png';
	imgArr[8] = '/processingimg/17.png';
	imgArr[9] = '/processingimg/19.png';
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
		setImg(imgArr[index[count]]);

	}, []);

	const getImg = async () => {
		console.log(index);
		setCount(count + 1);

		setImg(imgArr[index[count]]);
		console.log(index[count]);
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
