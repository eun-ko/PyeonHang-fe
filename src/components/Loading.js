import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function Loading() {
	return (
		<>
			{/*<Link href="/result">
				<Button variant="primary">결과 보기</Button>
			</Link>*/}
			<Img src="/logo_white.png"></Img>
			<Wrapper>
				<Img2 src="/loading_.png"></Img2>
			</Wrapper>
			<Title>검사가 완료되었습니다.</Title>
			<Title>잠시만 기다려주세요</Title>
		</>
	);
}
const Title = styled.p`
	font-size: 1.8rem;
	color: #007aff;
	//margin-bottom: 1rem;
	font-weight: bold;
`;
const Img = styled.img`
	width: 16rem;
	height: auto;
`;
const Wrapper = styled.div`
	width: 28.2rem;
	height: 21.2rem;
	margin-bottom: 2rem;
`;
