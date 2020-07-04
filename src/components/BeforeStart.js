import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

//import Button from 'react-bootstrap/Button';

export default function Start() {
	return (
		<Wrapper>
			<Ttl>
				지금 바로 <Ttl2>편행</Ttl2>을 경험해보세요!
			</Ttl>
			<Link href="/warning">
				<Button>편행 시작하기</Button>
			</Link>
		</Wrapper>
	);
}
//const Button = styled(Button)`
//	width: 18.7rem;
//	height: 5.6rem;
//`;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding-top: 3rem;
	padding-bottom: 13rem;
	align-items: center;
	background-color: white;
	color: #4f4f4f;
`;

const Ttl = styled.span`
	font-size: 1.8rem;
	margin-top: 2.3rem;
	margin-bottom: 5rem;
`;
const Ttl2 = styled.span`
	font-size: 1.8rem;
	margin-top: 2.3rem;
	margin-bottom: 5rem;
	color: #007aff;
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
