import React from 'react';
import styled from 'styled-components';
//import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Check() {
	return (
		<Wrapper>
			<Logo src="/logo_white.png"></Logo>
			<Img src="/sent_messages_.png" />
			<Title>감사합니다!</Title>
			<Cont>
				2시간내로 예약 가능 여부 확인 후,
				<br />
				카카오톡 채널 <Bold>편행</Bold>으로 연락드리겠습니다.
			</Cont>
			<KaKaotalk src="/kakaotalk channel.png" />
			<Link href="/">
				<Button>서비스 소개로 돌아가기</Button>
			</Link>
		</Wrapper>
	);
}
const KaKaotalk = styled.img`
	width: 16.7rem;
	margin-top: 1rem;
	height: 3.6rem;
`;
const Logo = styled.img`
	width: 16rem;
	height: 16rem;
`;
const Img = styled.img`
	width: 26.6rem;
	height: 20rem;
`;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	margin-top: 2.8rem;
`;
const Cont = styled.p`
	font-size: 1.4rem;
	font-family: NanumSquareOTF;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.69;
	letter-spacing: -0.21px;
	text-align: center;
`;
const Title = styled.div`
	margin-top: 1rem;
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 1rem;
	color: #007aff;
`;
const Bold = styled.span`
	font-weight: bold;
`;
const Button = styled.button`
	border: none;
	margin-top: 6rem;
	margin-bottom: 3rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	width: 100%;
	height: 4rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;
