import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Collapse } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '@src/components/organisms/Pagination.js';

export default function SResult() {
	const styles = {
		root: {
			position: 'relative',
		},
		slide: {
			height: 'auto',
			color: '#fff',
			padding: 0,
		},
		slide1: {
			backgroundColor: 'white',
		},
		slide2: {
			backgroundColor: 'white',
		},
		slide3: {
			backgroundColor: 'white',
		},
	};

	const [index, setIndex] = useState(0);
	const handleChangeIndex = (index) => {
		setIndex(index);
	};
	const { Panel } = Collapse;
	return (
		<>
			<Wrapper>
				<Header>
					<Title>누구와 떠날까요?</Title>
					<Row>
						<Single onClick={() =>
							Router.push('/single')
						}>혼자</Single>
						<Couple
							onClick={() =>
								Router.push('/couple')
							}
						>
							연인
						</Couple>
						<Friends>친구</Friends>
					</Row>
				</Header>

				<Img src="/f9.png" />
				<Destination>#제주_1박2일</Destination>
				<Course>
					<R>
						<FinalPrice>333,900원</FinalPrice>
						<Badge>최저가</Badge>
					</R>
					<Desc>
						라라스테이 200,000원
						<br />
						왕복짚라인 제주 28,000원
								<br />
						서피플퍼프 60,000원
								<br />
						제주레일바이크 30,000원
								<br />
						전체 예약가의 5% 수수료 포함
					</Desc>
					<Warn>
						<Collapse
							style={{ padding: 0, textAlign: 'right', margin: 0 }}
							defaultActiveKey={['1']}
							expandIconPosition="right"
							ghost
						>
							<Panel
								style={{
									textAlign: 'right',
									padding: 0,
									color: '#333333',
									fontSize: '1.2rem',
								}}
								header="주의사항"
								key="1"
							>
								<p
									style={{
										fontSize: '1rem',
										color: '#828282',
										textAlign: 'left',
										padding: 0,
									}}
								>
									여행 상품의 가격은 같은 상품이라 할지라도 여행 날짜, <br />
									여행자의 나이와 인원에 따라 달라질 수 있습니다.
								</p>
							</Panel>
						</Collapse>
					</Warn>
				</Course>
				<Gray></Gray>
				<Info>
					<Reserv>예약 숙소</Reserv>
					<Name>라라스테이</Name>
					<Exp> 제주 최고 오션뷰의 프라이빗 스파펜션</Exp>
					<Swipe style={styles.root}>
						<SwipeableViews
							index={index}
							onChangeIndex={handleChangeIndex}
							enableMouseEvents
						>
							<div style={Object.assign({}, styles.slide, styles.slide1)}>
								<Room src="/l1.png" />
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide2)}>
								<Room src="/l2.png" />
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide3)}>
								<Room src="/l3.png" />
							</div>
						</SwipeableViews>
						<Pagination
							dots={3}
							index={index}
							onChangeIndex={handleChangeIndex}
						/>
					</Swipe>
					<Hashtag>#오션뷰 #독채펜션 #뷰맛집</Hashtag>
				</Info>
				<Info>
					<Reserv>예약 액티비티</Reserv>

					<Name>왕복 짚라인 제주</Name>
					<Exp>짜릿한 짚라인타고 스릴을 느껴봐!</Exp>
					<CImg src="/act_img1.png"></CImg>
					<Hashtag>#제주짚라인 #짜릿한액티비티 #야외족욕은 덤!</Hashtag>

					<Name>서피플서프</Name>
					<Exp>애월바람을 가르며 윈드서핑 배워보자!</Exp>
					<CImg src="/act_img2.png"></CImg>
					<Hashtag>#윈드서핑 #강습포함 #빅재미</Hashtag>

					<Name>제주레일바이크</Name>
					<Exp>제주의 바람을 가르며 레일바이크 고고씽@</Exp>
					<CImg src="/act_img3.png"></CImg>
					<Hashtag>#레일바이크 #힐링과스릴을한번에</Hashtag>

				</Info>
				<Gray></Gray>
				<Info>
					<Type>식당/카페</Type>
					<Name>애월제주다</Name>
					<Exp>제주 애월맛집 해산물 모듬장 맛집</Exp>
					<Price>
						<Won src="/m.png" />
						3만원
					</Price>
					<CImg src="/meal_img1.png"></CImg>
					<Hashtag>#애월맛집 #신선한해물 #분위기맛집</Hashtag>
				</Info>
				<Info>
					<Name>흑돼지 박스</Name>
					<Exp>성산일출봉을 바라보며 먹는 제주흑돼지</Exp>
					<Price>
						<Won src="/m.png" /> 1만 5천원
					</Price>
					<CImg src="/meal_img2.png"></CImg>
					<Hashtag>#제주도는흑돼지 #성산일출봉 #뷰맛집</Hashtag>
				</Info>
				<Info>
					<Name>해월정</Name>
					<Exp>맛있는녀석들이 인정한 보말칼국수 보말죽</Exp>
					<Price>
						<Won src="/m.png" />
						3만원
					</Price>
					<CImg src="/meal_img3.png"></CImg>
					<Hashtag>#해산물가득 #입안속바다 #로컬추천</Hashtag>
				</Info>
				<Info>
					<Name>제주만복이네</Name>
					<Exp>제주시 맛집 제주 김만복 줄서서 먹는 전복김밥</Exp>
					<Price>
						<Won src="/m.png" /> 6천원
					</Price>
					<CImg src="/meal_img4.png"></CImg>
					<Hashtag>#한번쯤봤을걸 #제주머스트 #전복김밥</Hashtag>
				</Info>
				<Info>
					<Name>제주 프리또</Name>
					<Exp>신발도 튀기면 맛있다던데! 해산물이 통째로!</Exp>
					<Price>
						<Won src="/m.png" /> 1만 8천원
					</Price>
					<CImg src="/meal_img5.png"></CImg>
					<Hashtag>#바사바삭 #테이크아웃 #해산물러버</Hashtag>
				</Info>
				<Info>
					<Name>망고레이</Name>
					<Exp>제주에서 느끼는 망고 디저트카페</Exp>
					<Price>
						<Won src="/m.png" /> 8천원
					</Price>
					<CImg src="/meal_img6.png"></CImg>
					<Hashtag>#애월카페 #망고&코코넛덕후소환 #환상의조합</Hashtag>
				</Info>
				<Bottom>
					<Link href="/warning">
						<Replay>다시 하기</Replay>
					</Link>

					<Button
						onClick={() =>
							Router.push({
								pathname: '/friends_confirm',
							})
						}
					>
						코스 결정
					</Button>
				</Bottom>
			</Wrapper>
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
	margin: 0;
	font-size: 1.2rem;
	font-weight: normal;
	text-algin: right;
`;
const Course = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 7rem;
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
	padding-bottom:0.5rem;
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
	margin: 0.7rem;
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
	margin-bottom: 3rem;
	padding: 0 3rem;
`;
const Single = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	font-size: 1.4rem;
	font-weight: bold;
	background-color: white;
	color: #bdbdbd;
	margin-right: 2rem;
	:focus {
		outline: 0;
	}
`;
const Couple = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	color: #bdbdbd;
	font-size: 1.4rem;
	font-weight: bold;
	background-color: white;
	:focus {
		outline: 0;
	}
	margin-right: 2rem;
`;
const Friends = styled.button`
	width: 10rem;
	height: 3rem;
	border: none;
	font-size: 1.4rem;
	border-bottom: 0.15rem solid #007aff;
	font-weight: bold;
	background-color: white;
	color: #007aff;
	:focus {
		outline: 0;
	}
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	color: black;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 1rem;
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
	margin-right: 2rem;
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
const CImg = styled.img`
	width: 100%;
	height: auto;
	margin-bottom: 1rem;
	margin-top: 0.5rem;
	background-color: white;
`;
const Swipe = styled.div`
	width: 100%;
	height: 31.5rem;
	background-color: white;
	margin-bottom: 1rem;
`;
const Name = styled.p`
	font-size: 2.4rem;
	font-weight: bold;
	width: 100%;
	margin-bottom: 0.5rem;
`;
const Reserv = styled.p`
	font-size: 1.8rem;
	color: #007aff;
	font-weight: 500;
	width: 100%;
	margin: 0;
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
	width: 100%;
	height: 3rem;
	margin-bottom: 1.3rem;
	justify-content: space-between;
`;
const Price = styled.p`
	color: #ff9500;
	text-align: right;
	font-size: 1.4rem;
	font-weight: 300;
	margin: 0;
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
	max-width: 37.5rem;
	height: 9.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	background-color: #fff;
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	z-index: 10;
`;
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	margin: 0;
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
	max-width: 37.5rem;
	bottom: 0rem;
	border-radius: 1rem 1rem 0 0;
	background-color: white;
	box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.25);
`;
const Img = styled.img`
	width: 100%;
	height: auto;
	margin-top: 9.5rem;
`;
const Room = styled.img`
	width: 100%;
	height: auto;
`;
