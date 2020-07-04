import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

//import Button from 'react-bootstrap/Button';

export default function Warn() {
	return (
		<Wrapper>
			<Img src="/logo_white.png"></Img>
			<Title>잠깐만요!</Title>
			<br />
			<Cont>편행은 사용자가 희망하는</Cont>
			<Cont>최적의 여행플랜을 제공해드리고자</Cont>
			<Cont>여행 선호도 조사를 실행합니다.</Cont>
			<Margin></Margin>
			<Cont>고객님은 제시되는 이미지를 보고</Cont>
			<Cont>본인의 호불호에 따라 버튼을 눌러주시면 됩니다.</Cont>
			<Margin></Margin>
			<Content>단, 편행의 여행 선호도 조사는 "편도행"입니다.</Content>
			<Margin></Margin>
			<Cont>각 이미지에 대한 호불호를 누르는 순간</Cont>
			<Cont>다음 페이지로 넘어가며,</Cont>
			<Cont>이전 페이지로 돌아갈 수 없으니</Cont>
			<Cont>충분한 고려 이후에 눌러주세요</Cont>
			<Margin></Margin>
			<Link href="processing">
				<a>
					<Button>선호도 조사 시작</Button>
				</a>
			</Link>
		</Wrapper>
	);
}
const Img = styled.img`
	width: 12rem;
	height: 12rem;
`;
const Logo = styled.button`
	width: 4rem;
	height: 4rem;
	border: none;
	margin-bottom: 4rem;
	font-size: 2rem;
	color: #f59f00;
	background-color: white;
	border-radius: 2.5rem;
	box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0),
		0 8px 16px -5px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const Margin = styled.div`
	margin-bottom: 2rem;
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 1rem;
	color: #f59f00;
`;

const Cont = styled.p`
	font-size: 1.4rem;
	margin: 0;
`;
const Content = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
	margin: 0;
`;
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 6.4rem;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;
`;
const Button = styled.button`
	border: none;
	border-radius: 1.6rem;
	margin-top: 5rem;
	width: 18.7rem;
	height: 5.6rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
