import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

//import Button from 'react-bootstrap/Button';

export default function Warn() {
	return (
		<Wrapper>
			<Img src="/logo_white.png"></Img>
			<Contents>
				<Title>잠깐만요!</Title>
				편행은 '사진 담기' 기능을 통해 <br />
				사용자에게 맞는 <Bold>최적의 여행코스</Bold>를
				<br />
				산출해냅니다.
				<br />
				<br />
				<br />
				여행지에서 해당 사진과
				<br />
				비슷한 감성의 사진을 찍고 싶다면
				<Img2 src="/heart.png" /> 를,
				<br />
				아니라면 <Img2 src="/x.png" />를<br />
				눌러주세요!
			</Contents>
			<Link href="/processing">
				<Button>선호도 조사 시작</Button>
			</Link>
		</Wrapper>
	);
}
const Bold = styled.span`
	font-weight: bold;
`;
const Img = styled.img`
	width: 12rem;
	height: 12rem;
	margin-bottom: 5.3rem;
`;
const Img2 = styled.img`
	width: 2.7rem;
	height: 2.7rem;
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 3rem;
	color: #f59f00;
`;

const Contents = styled.p`
	font-size: 1.4rem;
	font-weight: 300;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.69;
	letter-spacing: normal;
	text-align: center;
	margin-bottom: 12rem;
	height: 20.1rem;
`;

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3.2rem;
`;
const Button = styled.button`
	border: none;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	width: 31.5rem;
	height: 4rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;
