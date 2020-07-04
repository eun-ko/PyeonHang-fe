import React from 'react';
import styled from 'styled-components';

export default function Intro() {
	return (
		<>
			<Wrapper1>
				<Img src="/logo_blue.png" />
				<Img2 src="/tr.png" />
				<Title>여행보다 편행</Title>
				<Margin />
				<Cont>
					<Cont2>누구나 무작정</Cont2> 여행을 가고자 한다면,
				</Cont>
				<Cont>편하게 국내여행을 갈 수 있도록 하는 </Cont>
				<Cont>
					여행플랜 서비스<Cont2> 편행</Cont2>
				</Cont>
				<Margin />
				<Margin />

				<Margin />
				<Margin />
				<Cont>편행에 대해서 더 알아보기</Cont>
				<Img4 src="/arrow.png"></Img4>
			</Wrapper1>
			<Wrapper2>
				<Img3 src="/1.png"></Img3>
				<Margin></Margin>
				<Title>국내 여행 준비는</Title>
				<Title> 생각외로 복잡합니다.</Title>
				<Margin></Margin>
				<Cont>
					여행지를 탐색<Cont2>하고</Cont2>
				</Cont>
				<Cont>
					괜찮은 숙소를 찾고 예약<Cont2>하고</Cont2>
				</Cont>
				<Cont>
					교툥편을 찾고 예약<Cont2>하고</Cont2>
				</Cont>
				<Cont>
					여행지 맛집을 검색해 계획을 <Cont2>짜고..</Cont2>
				</Cont>
			</Wrapper2>
			<Wrapper3>
				<Img3 src="/2.png"></Img3>
				<Margin></Margin>
				<Title>모두 다 필요없고</Title>
				<Title>편행 하나면 됩니다.</Title>
				<Margin></Margin>
				<Cont>당신이 선택한 단 하나의 코스를</Cont>
				<Cont>
					단지 <Cont2>클릭 한 번</Cont2>으로
				</Cont>
				<Cont>숙소, 교통편, 액티비티 등</Cont>
				<Cont>
					<Cont2>필요한 모든 것</Cont2>을 예약해줍니다.
				</Cont>
				<Margin></Margin>
			</Wrapper3>
			<Wrapper2>
				<Img3 src="/3.png"></Img3>
				<Margin></Margin>
				<Title>당신만을 위한</Title>
				<Title>특별한 코스</Title>
				<Margin></Margin>
				<Cont>당신이 선택한 단 하나의 코스를</Cont>
				<Cont>
					단지 <Cont2>클릭 한 번</Cont2> 으로
				</Cont>
				<Cont>숙소, 교통편, 액티비티 등</Cont>
				<Cont>
					<Cont2>필요한 모든 것</Cont2>을 예약해줍니다.
				</Cont>
			</Wrapper2>
		</>
	);
}

const Margin = styled.div`
	margin-bottom: 2rem;
`;
const Img = styled.img`
	width: 12rem;
	height: auto;
	margin-bottom: 1rem;
`;
const Img2 = styled.img`
	width: 19.6rem;
	height: 22.6rem;
	margin-bottom: 1rem;
`;
const Img3 = styled.img`
	width: 37.5rem;
	height: 32rem;
`;
const Img4 = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	margin-top: 1rem;
`;
const Title = styled.div`
	font-size: 3.6rem;
	//margin-bottom: 1rem;
	font-weight: bold;
`;
const Cont = styled.span`
	font-size: 1.4rem;
	padding: 0;
	font-weight: 300;
	margin: 0;
`;
const Cont2 = styled.span`
	font-size: 1.4rem;
	padding: 0;
	font-weight: bold;
	margin: 0;
`;
const Ttl = styled.p`
	font-size: 2.5rem;
`;
const Wrapper1 = styled.div`
	width: 100%;
	min-height: 51.2rem;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding-bottom: 5rem;
	align-items: center;

	background-color: #007aff;
	color: white;
`;
const Wrapper2 = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 51.2rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 5rem;

	align-items: center;
	background-color: #ffffff;
	color: #4f4f4f;
`;
const Wrapper3 = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 51.2rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 5rem;

	align-items: center;
	background-color: #ff9500;
	color: white;
`;
