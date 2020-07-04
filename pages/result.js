import React from 'react';
import styled from 'styled-components';
//import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Loading from '@src/components/Loading';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
export default function Result() {
	return (
		<>
			<Wrapper>
				<Header></Header>

				<Bottom>
					<Label>총 236,460원</Label>
					<Button>코스 결정</Button>
				</Bottom>
			</Wrapper>
		</>
	);
}
const Label = styled.div`
	font-size: 1.8rem;
`;
const Header = styled.div`
	position: fixed;
	width: 37.5rem;
	height: 5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem;
	background-color: #fff;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	z-index: 10;
`;
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	margin: 0;
	//flex-direction: column;
	padding-top: 4rem;
`;
const Bottom = styled.div`
	display: flex;
	padding: 5rem;
	justify-content: space-between;
	align-items: center;
	width: 37.5rem;
	height: 7.2rem;
	position: fixed;
	bottom: 0rem;
	border-radius: 1rem 1rem 0 0;
	background-color: white;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
const Img = styled.img`
	width: 16rem;
	height: auto;
`;
const Img2 = styled.img`
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
const Button = styled.button`
	border: none;
	border-radius: 1.6rem;

	width: 14.2rem;
	height: 5.2rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
