import React from 'react';
import styled from 'styled-components';

export default function Loading() {
    return (
        <Wrapper>
            <Img src="/logo_white.png"></Img>
            <Img2 src="/loading_.png"></Img2>
            <Title>검사가 완료되었습니다.<br />
                잠시만 기다려주세요</Title>
        </Wrapper>
    );
}
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
const Title = styled.p`
	font-size: 1.8rem;
	color: #007aff;
    font-weight: 500;
    text-align:center;
 
`;
const Img = styled.img`
	width: 16rem;
	height: auto;
`;
const Img2 = styled.img`
width: 28.2rem;
height: 21.2rem;
margin-bottom: 3.1rem;
`;
