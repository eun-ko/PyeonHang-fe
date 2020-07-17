import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Wrapper1>
				<Logo src="/logo_blue.png" />
				<TravelImg src="/tr.png" />
				<Title>여행보다 편행</Title>
				<Cont>
					<Cont2>누구나 무작정</Cont2> 여행을 가고자 한다면,
					<br />
					편하게 국내여행을 갈 수 있도록 하는
					<br />
					여행플랜 서비스<Cont2> 편행</Cont2>
				</Cont>

				<Info3>편행에 대해서 더 알아보기</Info3>
				<ArrowImg src="/arrow.png"></ArrowImg>
			</Wrapper1>
			<Wrapper2>
				<Img src="/1.png"></Img>
				<Title2>
					국내 여행 준비는
					<br /> 생각외로 복잡합니다.
				</Title2>
				<Cont>
					여행지를 탐색<Cont2>하고</Cont2>
					<br />
					괜찮은 숙소를 찾고 예약<Cont2>하고</Cont2>
					<br />
					교툥편을 찾고 예약<Cont2>하고</Cont2>
					<br />
					여행지 맛집을 검색해 계획을 <Cont2>짜고..</Cont2>
				</Cont>
			</Wrapper2>
			<Wrapper3>
				<Img src="/2.png"></Img>

				<Title2>
					모두 다 필요없고 <br />
					편행 하나면 됩니다.
				</Title2>
				<Cont>
					당신이 선택한 단 하나의 코스를
					<br />
					단지 <Cont2>클릭 한 번</Cont2>으로
					<br />
					숙소, 교통편, 액티비티 등
					<br />
					<Cont2>필요한 모든 것</Cont2>을 예약해줍니다.
				</Cont>
			</Wrapper3>
			<Wrapper4>
				<Img src="/3.png"></Img>
				<Title2>
					당신만을 위한
					<br />
					특별한 1박2일 코스
				</Title2>
				<Cont>
					<Cont2>“사진 선호도 조사"</Cont2>를 통한 취향분석을 통해,
					<br />
					엄선된 숙소, 맛집, 액티비티와 경로계산까지
					<br />
					완료된 최저가 코스 등 믿고 떠날 수 있는
					<br />
					<Cont2>코스 정보</Cont2>를 제공합니다.
				</Cont>
				<Title3>편행 사용후기</Title3>
				<Review>
					<ReviewContents>
						<Emoji>😎</Emoji>
						더 이상 포털사이트에 일일이 검색하고,
						<br />
						경로 생각할 필요가 없어요;;;
						<br />
						여행 시장을 혁신한 듯 합니다
						<Reviewer>김*준(25세) 2020년 6월 사용자</Reviewer>
					</ReviewContents>
				</Review>
				<Review>
					<ReviewContents>
						<Emoji>😘</Emoji>
						바로 떠나고 싶은데 알아볼게 많아서 망설였는데
						<br />
						편행이 여행지도 추천해주고 코스도 짜주고,,
						<br />
						너무 편하더라구요! 편행체고!
						<Reviewer>박*연 (23세) 2020년 7월 사용자</Reviewer>
					</ReviewContents>
				</Review>
				<Review>
					<ReviewContents>
						<Emoji>🤗</Emoji>
						계획짜는 거 너무 막막했는데
						<br />
						편행으로 너무 편하게 여행갔다왔어요!
						<br />
						ㅠㅠ넘 고마워요 편행!
						<Reviewer>나*심(22세) 2020년 7월 사용자</Reviewer>
					</ReviewContents>
				</Review>

				<Ttl>
					지금 바로 <Ttl2>편행</Ttl2>을 경험해보세요!
				</Ttl>
				<Link href="/warning">
					<Button>편행 시작하기</Button>
				</Link>
			</Wrapper4>
		</>
	);
}
const Emoji = styled.div`
	font-size: 2rem;
	font-weight: 300;
`;
const Logo = styled.img`
	width: 12rem;
	height: 12rem;
`;
const TravelImg = styled.img`
	width: 19.6rem;
	height: 22.6rem;
	margin-bottom: 2.9rem;
`;
const Img = styled.img`
	width: 37.5rem;
	height: 31.5rem;
`;
const ArrowImg = styled.img`
	width: 5%;
	height: auto;
`;
const Title = styled.div`
	font-size: 3.6rem;
	margin-bottom: 4.1rem;
	font-weight: bold;
`;
const Title2 = styled.div`
	font-size: 3.6rem;
	margin-top: 4.2rem;
	margin-bottom: 3.3rem;
	font-weight: bold;
	text-align: center;
	line-height: 1.21;
	letter-spacing: normal;

	height: 8.6rem;
`;
const Title3 = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	color: #333333;
	text-align: center;
	margin-top: 8.8rem;
	margin-bottom: 3.5rem;
`;
const Review = styled.div`
	width: 32.4rem;
	height: 15.7rem;
	border-radius: 1.7rem;
	padding-left: 1.3rem;
	padding-top: 1.3rem;
	padding-bottom: 1.7rem;
	//margin-left: 1rem;
	box-shadow: 0 0.3rem 0.8rem 0 rgba(0, 0, 0, 0.15);
	margin-bottom: 1.7rem;
	//margin-top: 8rem;
`;
const ReviewContents = styled.p`
	width: 29.5rem;
	height: 6rem;
	font-size: 1.2rem;
	font-weight: normal;
	color: #4f4f4f;
	margin: 0;
	text-align: center;
	padding-bottom: 1rem;
`;
const Reviewer = styled.p`
	width: 29.5rem;
	height: 1.8rem;
	font-size: 0.8rem;
	font-weight: 300;
	color: #4f4f4f;
	text-align: center;
	margin-bottom: 3rem;
`;
const Cont = styled.span`
	font-size: 1.4rem;
	padding: 0;
	font-weight: 300;
	text-align: center;
	margin-bottom: 3.8rem;
	line-height: 1.59;
	letter-spacing: normal;
`;
const Cont2 = styled.span`
	font-size: 1.4rem;
	padding: 0;
	font-weight: bold;
	margin: 0;
`;
const Info3 = styled.span`
	font-size: 1.4rem;
	font-weight: 300;
	text-align: center;
	margin-bottom: 1.2rem;
`;
const Ttl = styled.span`
	font-size: 1.8rem;
	margin-top: 3.3rem;
	margin-bottom: 2.5rem;
	font-weight: bold;
`;
const Ttl2 = styled.span`
	font-size: 1.8rem;
	margin-top: 2.3rem;
	margin-bottom: 5rem;
	color: #007aff;
	font-weight: bold;
`;
const Button = styled.button`
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	height: 5rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;

const Wrapper1 = styled.div`
	width: 37.5rem;
	height: 72.3rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 7.2rem;
	padding-top: 2.2rem;
	align-items: center;
	background-color: #007aff;
	color: white;
`;
const Wrapper2 = styled.div`
	width: 37.5rem;
	height: 67.4rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 5rem;

	align-items: center;
	background-color: #ffffff;
	color: #4f4f4f;
`;
const Wrapper3 = styled.div`
	width: 37.5rem;
	height: 67.4rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 5rem;
	align-items: center;
	background-color: #ff9500;
	color: white;
`;
const Wrapper4 = styled.div`
	width: 37.5rem;
	height: 134.5rem;
	display: flex;
	flex-direction: column;
	padding: 0 3rem;
	align-items: center;
	background-color: #ffffff;
	color: #4f4f4f;
	padding-bottom: 3rem;
`;
