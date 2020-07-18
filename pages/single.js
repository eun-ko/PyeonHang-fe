import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Collapse } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '@src/components/organisms/Pagination.js';

export default function Result() {
	const [course, setCourse] = useState({
		city: '통영',
		result_img: '',
		room_name: '슬로비게스트하우스',
		room_detail: '시설, 조식, 위치, 서비스 어느것 하나 빠지지 않는 가성비 호텔',
		room_hash: '#바다앞카페 #한식조식무료 #카약무료',
		room_img1: '',
		room_img2: '',
		room_img3: '',
		meal_name1: '',
		meal_name2: '',
		meal_name3: '',
		meal_name4: '',
		meal_name5: '',
		meal_name6: '',
		meal_hash1: '',
		meal_hash2: '',
		meal_hash3: '',
		meal_hash4: '',
		meal_hash5: '',
		meal_hash6: '',
		meal_detail1: '',
		meal_detail2: '',
		meal_detail3: '',
		meal_detail4: '',
		meal_detail5: '',
		meal_detail6: '',
		meal_hash1: '',
		meal_hash2: '',
		meal_hash3: '',
		meal_hash4: '',
		meal_hash5: '',
		meal_hash6: '',
		meal_img1: '',
		meal_img2: '',
		meal_img3: '',
		meal_img4: '',
		meal_img5: '',
		meal_img6: '',
		act_name1: '',
		act_name2: '',
		act_name3: '',
		act_detail1: '',
		act_detail2: '',
		act_detail3: '',
		act_img1: '',
		act_img2: '',
		act_img3: '',
		act_hash1: '',
		act_hash2: '',
		act_hash3: '',
	});

	const [payment, setPayment] = useState({ room_price: 0, activity_price: 0 });
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
			backgroundColor: '#ff9500',
		},
		slide2: {
			backgroundColor: 'white',
		},
		slide3: {
			backgroundColor: 'white',
		},
	};
	//const getCourse=async()=>{
	//	const data=awat axios
	//	.get(process.env.local.API_HOST+'/course')
	//	.then((res)=>{
	//		console.log(res);
	//		return res.data;
	//	})
	//	.catch((err)=>console.log(err));
	//	course.city=data.city;
	//}
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
						<Single onClick={() => Router.push('/single')}>혼자</Single>
						<Couple onClick={() => Router.push('/couple')}>연인</Couple>
						<Friends onClick={() => Router.push('/friends')}>친구</Friends>
					</Row>
				</Header>

				<Img src="/9-grid.png" />
				<Destination>#{course.city}_1박2일</Destination>
				<Course>
					<R>
						<FinalPrice>55,000원</FinalPrice>
						<Badge>최저가</Badge>
					</R>
					<Desc>
						{course.room_name} {payment.room_price}원
						<br />
						스카이라인루지 통영 {payment.activity_price}원
						<br />
						여행 플랜 pdf 5,000원
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
					<Name>{course.room_name}</Name>
					<Exp>{course.room_detail}</Exp>
					<Swipe style={styles.root}>
						<SwipeableViews
							index={index}
							onChangeIndex={handleChangeIndex}
							enableMouseEvents
						>
							<div style={Object.assign({}, styles.slide, styles.slide1)}>
								<Room src="/9-grid.png" />
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide2)}>
								slide n°2
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide3)}>
								slide n°3
							</div>
						</SwipeableViews>
						<Pagination
							dots={3}
							index={index}
							onChangeIndex={handleChangeIndex}
						/>
					</Swipe>
					<Hashtag>{course.room_hash}</Hashtag>
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
	margin-bottom: 3rem;
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
const CImg = styled.div`
	width: 31.5rem;
	height: 31.5rem;
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
