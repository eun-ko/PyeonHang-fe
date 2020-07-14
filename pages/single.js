import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import Loading from '../src/components/Loading';
import SwipeableViews from 'react-swipeable-views';

export default function Result() {
	const [isLoading, setLoading] = useState(false);
	//받아오면 setLoading false해주기
	const [course, setCourse] = useState({
		city: '',

		roomPrice: 0,
		roomName: '',
	});

	const styles = {
		slide: {
			padding: 15,
			//minHeight: 375,
			color: '#fff',
		},
		slide1: {
			backgroundColor: '#FEA900',
		},
		slide2: {
			backgroundColor: '#B3DC4A',
		},
		slide3: {
			backgroundColor: '#6AC0FF',
		},
	};
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<Header>
						<Title>누구와 떠날까요?</Title>
						<Row>
							<Single onClick={() => Router.push('/single')}>혼자</Single>
							<Couple onClick={() => Router.push('/couple')}>연인</Couple>
							<Friends onClick={() => Router.push('/friends')}>친구</Friends>
						</Row>
					</Header>
					<Wrapper>
						<Img src="/9-grid.png" />
						<Destination>#통영_1박2일</Destination>
						<Course>
							<R>
								<FinalPrice>55,000원</FinalPrice>
								<Badge>최저가</Badge>
							</R>
							<Desc>
								슬로비게스트하우스 20,000원
								<br />
								스카이라인루지 통영 30,000원
								<br />
								여행 플랜 pdf 5,000원
							</Desc>
							<Warn>주의사항</Warn>
						</Course>
						<Gray></Gray>
						<Info>
							<Reserv>예약 숙소</Reserv>
							<Name>슬로비게스트하우스</Name>
							<Exp>
								시설, 조식, 위치, 서비스 어느것 하나 빠지지 않는 가성비 호텔
							</Exp>
							<CImg></CImg>
							{/*<SwipeableViews enableMouseEvents>
						<div style={Object.assign({}, styles.slide, styles.slide1)}>1</div>
						<div style={Object.assign({}, styles.slide, styles.slide2)}></div>
						<div style={Object.assign({}, styles.slide, styles.slide3)}>
							<CImg src="/white.png"></CImg>
						</div>
					</SwipeableViews>*/}
							<Hashtag>#바다앞카페 #한식조식무료 #카약무료</Hashtag>
						</Info>
						<Info>
							<Reserv>예약 액티비티</Reserv>
							<Name>스카이라인루지 통영</Name>
							<Exp>통영에서 루지를 타고 스릴을 느껴봐요!</Exp>
							<CImg></CImg>
							<Hashtag>#통영루지 #스릴 #존잼</Hashtag>
						</Info>
						<Gray></Gray>
						<Info>
							<Type>식당/카페</Type>
							<Name>벅수다찌</Name>
							<Exp>통영 현지인 추천 최고의 맛집</Exp>
							<Price>
								<Won src="/m.png" />
								3~4만원대
							</Price>
							<CImg></CImg>
							<Hashtag>#통영현지맛집 #정갈한밥상 #통영식술</Hashtag>
						</Info>
						<Info>
							<Name>할매 우짜</Name>
							<Exp>통영먹거리 서호시장 통영우짜 맛집</Exp>
							<Price>
								<Won src="/m.png" /> 1만원 이하
							</Price>
							<CImg></CImg>
							<Hashtag>#우동과짜장 #방송다수출연 #국물이찐</Hashtag>
						</Info>
						<Info>
							<Name>통영해물가</Name>
							<Exp>통영 물회 푸짐하고 맛있는 곳</Exp>
							<Price>
								<Won src="/m.png" /> 2~3만원대
							</Price>
							<CImg></CImg>
							<Hashtag>#통영물회 #푸짐한인심 #방송다수출연</Hashtag>
						</Info>
						<Info>
							<Name>한양식당</Name>
							<Exp>육지도에서 푸짐한 해물 짬뽕!</Exp>
							<Price>
								<Won src="/m.png" /> 1만원 이하
							</Price>
							<CImg></CImg>
							<Hashtag>#해물가득 #현지인추천 #국물이끝내줌</Hashtag>
						</Info>
						<Info>
							<Name>통영 오미사꿀빵</Name>
							<Exp>통영에서 제일 유명한 꿀빵!</Exp>
							<Price>
								<Won src="/m.png" /> 1만원 이하
							</Price>
							<CImg></CImg>
							<Hashtag>#통영카페 #생딸기라떼 #딸기케이크</Hashtag>
						</Info>
						<Info>
							<Name>하루케이크</Name>
							<Exp>딸기 케이크 맛집</Exp>
							<Price>
								<Won src="/m.png" /> 1만원 이하
							</Price>
							<CImg></CImg>
							<Hashtag>#tv다수출연 #오미사꿀빵 #통영현지맛집</Hashtag>
						</Info>

						<Info>
							<Name>동피랑 벽화마을</Name>
							<Exp>인스타 감성 200% 인생샷 보장!</Exp>
							<CImg></CImg>
							<Hashtag>#알록달록 #벽화마을 #사진맛집 </Hashtag>
						</Info>
						<Bottom>
							<Link href="/warning">
								<Replay>다시 하기</Replay>
							</Link>
							<Link href="/single_confirm">
								<Button>코스 결정</Button>
							</Link>
						</Bottom>
					</Wrapper>
				</>
			)}
		</>
	);
}
const Won = styled.img`
	width: 1.3rem;
	height: auto;
	margin-bottom: 0.6rem;
	margin-right: 0.3rem;
`;
const Warn = styled.div`
	margin-top: 2.1rem;
	margin-bottom: 2rem;
	color: #333333;
	font-size: 1.2rem;
	font-weight: normal;
	text-algin: right;
	margin-left: 7rem;
`;
const Course = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 18rem;
	padding-right: 2rem;
`;
const R = styled.div`
	display: flex;
	text-align: right;
	justify-content: flex-end;
`;
const FinalPrice = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;
const Badge = styled.div`
	width: 4.2rem;
	height: 1.9rem;
	border-radius: 0.4rem;
	background-color: #007aff;
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	margin: 0.5rem;
	margin-right: 0;
`;
const Desc = styled.div`
	font-size: 1rem;
	font-weight: 300;
	color: #828282;
	text-align: right;
`;
const Gray = styled.div`
	width: 100%;
	height: 1rem;
	background-color: #f0f0f0;
	margin-bottom: 2.5rem;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 2rem;
	padding: 0 3rem;
`;
const Single = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	border-bottom: 0.15rem solid #007aff;
	font-size: 1.4rem;
	font-weight: bold;
	background-color: white;
	color: #007aff;
	margin-right: 2rem;
	:focus {
		outline: 0;
	}
`;
const Couple = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	:focus {
		outline: 0;
	}
	font-size: 1.4rem;
	font-weight: bold;
	background-color: white;
	color: #bdbdbd;
	margin-right: 2rem;
`;
const Friends = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	font-size: 1.4rem;
	font-weight: bold;
	background-color: white;
	color: #bdbdbd;
	:focus {
		outline: 0;
	}
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	color: black;
	text-align: center;
	margin-top: 2.3rem;
`;
const Button = styled.button`
	border: none;
	border-radius: 0.5rem;
	width: 14.2rem;
	height: 4rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;
const Replay = styled.button`
	width: 14.2rem;
	border: none;
	height: 4rem;
	font-size: 1.8rem;
	font-weight: bold;
	border-radius: 0.5rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
	background-color: #e0e0e0;
	color: white;
`;
const Hashtag = styled.div`
	width: 100%;
	height: 4.8rem;
	background-color: #f0f0f0;
	font-size: 1.4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	color: #828282;
	margin-bottom: 5rem;
`;
const CImg = styled.div`
	width: 31.5rem;
	height: 31.5rem;
	background-color: white;
`;
const Name = styled.p`
	font-size: 2.4rem;
	font-weight: bold;
	width: 100%;
`;
const Reserv = styled.p`
	font-size: 1.8rem;
	color: #007aff;
	font-weight: 500;
	width: 100%;
`;
const Type = styled.p`
	font-size: 1.8rem;
	color: #ff9500;
	font-weight: 500;
	width: 100%;
`;
const Info = styled.div`
	padding-left: 3rem;
	padding-right: 3rem;
	padding-bottom: 0.5rem;
	width: 100%;
`;
const Exp = styled.p`
	font-size: 1.4rem;
	color: #828282;
	font-weight: 300;
	display: flex;
	width: 22.8rem;
	height: 4rem;
	margin-bottom: 1.3rem;
	justify-content: space-between;
`;
const Price = styled.p`
	color: #ff9500;
	text-align: right;
	font-size: 1.4rem;
	font-weight: 300;
`;
const Destination = styled.div`
	width: 100%;
	height: 8rem;
	font-size: 2.4rem;
	padding-left: 3rem;
	padding-top: 2.1rem;
	padding-bottom: 2.9rem;
	font-weight: bold;
`;
const Header = styled.div`
	position: fixed;
	width: 100%;
	height: 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	background-color: #fff;
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	//z-index: 10;
`;
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	margin: 0;
	padding-top: 9.5rem;
	margin-bottom: 10rem;
`;

const Bottom = styled.div`
	display: flex;
	padding-left: 3rem;
	padding-right: 3rem;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 7rem;
	position: fixed;
	bottom: 0rem;
	border-radius: 1rem 1rem 0 0;
	background-color: white;
	box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.25);
`;
const Img = styled.img`
	width: 100%;
	height: auto;
`;
