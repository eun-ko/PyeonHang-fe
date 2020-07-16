import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import Loading from '../src/components/Loading';

export default function Processing() {
	const [progress, setProgress] = useState(50);
	const [count, setCount] = useState(0);
	const [img, setImg] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const getImg = () => {
		const imgArr = new Array();
		imgArr[0] = '/여수 낭만포차.png';
		imgArr[1] = '/수목원아담원.png';
		imgArr[2] = '/내수전몽돌해변.png';
		imgArr[3] = '/바다서프.png';
		imgArr[4] = '/통영해물가.png';
		setCount(count + 1);
		setImg(imgArr[count]);
		setProgress(progress + 10);

		if (progress == 100) {
			setLoading(true);
			Router.push('/single');
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
