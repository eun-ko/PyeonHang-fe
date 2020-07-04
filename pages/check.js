import React from 'react';
import styled from 'styled-components';
//import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Check() {
	return (
		<Wrapper>
			<Img2 src="/logo_white.png"></Img2>
			<Img src="/sent_messages_.png" />
			<Title>감사합니다!</Title>
			<Cont>1시간내로</Cont>
			<Cont>예약 가능여부 확인 후,</Cont>
			<Cont>연락처로 연락드리겠습니다.</Cont>
			<Link href="/">
				<Button>서비스 소개로 돌아가기</Button>
			</Link>
		</Wrapper>
	);
}
const Img2 = styled.img`
	width: 16rem;
	height: auto;
`;
const Img = styled.img`
	width: 26.6rem;
	height: 20rem;
`;
const Margin = styled.div`
	margin-bottom: 8rem;
`;
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6rem 0;
`;
const Cont = styled.p`
	font-size: 1.4rem;
`;
const Title = styled.div`
	margin-top: 1rem;
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 1rem;
	color: #3366ff;
`;
const Button = styled.button`
	border: none;
	border-radius: 1.6rem;
	margin-top: 5rem;
	width: 25.7rem;
	height: 5.6rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
