import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { Collapse } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '@src/components/organisms/Pagination.js';

export default function FResult() {
	const [city, setCity] = useState();
	const [result_img, setResultImg] = useState();
	const [room_price, setRoomPrice] = useState();
	const [room_name, setRoomName] = useState();
	const [room_detail, setRoomDetail] = useState();
	const [room_hash, setRoomHash] = useState();
	const [room_img1, setRoomImg1] = useState();
	const [room_img2, setRoomImg2] = useState();
	const [room_img3, setRoomImg3] = useState();
	const [meal_name1, setMealName1] = useState();
	const [meal_name2, setMealName2] = useState();
	const [meal_name3, setMealName3] = useState();
	const [meal_name4, setMealName4] = useState();
	const [meal_name5, setMealName5] = useState();
	const [meal_name6, setMealName6] = useState();
	const [meal_hash1, setMealHash1] = useState();
	const [meal_hash2, setMealHash2] = useState();
	const [meal_hash3, setMealHash3] = useState();
	const [meal_hash4, setMealHash4] = useState();
	const [meal_hash5, setMealHash5] = useState();
	const [meal_hash6, setMealHash6] = useState();
	const [meal_detail1, setMealDetail1] = useState();
	const [meal_detail2, setMealDetail2] = useState();
	const [meal_detail3, setMealDetail3] = useState();
	const [meal_detail4, setMealDetail4] = useState();
	const [meal_detail5, setMealDetail5] = useState();
	const [meal_detail6, setMealDetail6] = useState();
	const [meal_img1, setMealImg1] = useState();
	const [meal_img2, setMealImg2] = useState();
	const [meal_img3, setMealImg3] = useState();
	const [meal_img4, setMealImg4] = useState();
	const [meal_img5, setMealImg5] = useState();
	const [meal_img6, setMealImg6] = useState();
	const [meal_price1, setMealPrice1] = useState();
	const [meal_price2, setMealPrice2] = useState();
	const [meal_price3, setMealPrice3] = useState();
	const [meal_price4, setMealPrice4] = useState();
	const [meal_price5, setMealPrice5] = useState();
	const [meal_price6, setMealPrice6] = useState();
	const [act_name1, setActName1] = useState();
	const [act_name2, setActName2] = useState();
	const [act_name3, setActName3] = useState();
	const [act_detail1, setActDetail1] = useState();
	const [act_detail2, setActDetail2] = useState();
	const [act_detail3, setActDetail3] = useState();
	const [act_img1, setActImg1] = useState();
	const [act_img2, setActImg2] = useState();
	const [act_img3, setActImg3] = useState();
	const [act_hash1, setActHash1] = useState();
	const [act_hash2, setActHash2] = useState();
	const [act_hash3, setActHash3] = useState();
	const [act_price1, setActPrice1] = useState();
	const [act_price2, setActPrice2] = useState();
	const [act_price3, setActPrice3] = useState();
	const [sum, setSum] = useState();

	const router = useRouter();
	let fID, sID, cID;

	useEffect(() => {
		console.log('friends.js', router.query.id);
		fID = Number(router.query.id);
		sID = Number(router.query.id) - 2;
		cID = Number(router.query.id) - 1;
		console.log(sID, cID, fID);
		getCourse();
	}, []);

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
	const getCourse = async () => {
		await axios
			.get(
				`http://ec2-52-79-228-174.ap-northeast-2.compute.amazonaws.com:8000/course/${fID}/`
			)
			.then((res) => {
				console.log(res.data);
				setRoomPrice(
					res.data.room_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
				);
				setCity(res.data.city);
				setResultImg(res.data.result_img);
				setRoomName(res.data.room_name);
				setRoomDetail(res.data.room_detail);
				setRoomHash(res.data.room_hash);
				setRoomImg1(res.data.room_img1);
				setRoomImg2(res.data.room_img2);
				setRoomImg3(res.data.room_img3);
				setMealName1(res.data.meal_name1);
				setMealName2(res.data.meal_name2);
				setMealName3(res.data.meal_name3);
				setMealName4(res.data.meal_name4);
				setMealName5(res.data.meal_name5);
				setMealName6(res.data.meal_name6);
				setMealHash1(res.data.meal_hash1);
				setMealHash2(res.data.meal_hash2);
				setMealHash3(res.data.meal_hash3);
				setMealHash4(res.data.meal_hash4);
				setMealHash5(res.data.meal_hash5);
				setMealHash6(res.data.meal_hash6);
				setMealDetail1(res.data.meal_detail1);
				setMealDetail2(res.data.meal_detail2);
				setMealDetail3(res.data.meal_detail3);
				setMealDetail4(res.data.meal_detail4);
				setMealDetail5(res.data.meal_detail5);
				setMealDetail6(res.data.meal_detail6);
				setMealImg1(res.data.meal_img1);
				setMealImg2(res.data.meal_img2);
				setMealImg3(res.data.meal_img3);
				setMealImg4(res.data.meal_img4);
				setMealImg5(res.data.meal_img5);
				setMealImg6(res.data.meal_img6);
				setMealPrice1(res.data.meal_price1);
				setMealPrice2(res.data.meal_price1);
				setMealPrice3(res.data.meal_price1);
				setMealPrice4(res.data.meal_price1);
				setMealPrice5(res.data.meal_price1);
				setMealPrice6(res.data.meal_price1);
				setActName1(res.data.act_name1);
				setActName2(res.data.act_name2);
				setActName3(res.data.act_name3);
				setActDetail1(res.data.act_detail1);
				setActDetail2(res.data.act_detail2);
				setActDetail3(res.data.act_detail3);
				setActImg1(res.data.act_img1);
				setActImg2(res.data.act_img2);
				setActImg3(res.data.act_img3);
				setActHash1(res.data.act_hash1);
				setActHash2(res.data.act_hash2);
				setActHash3(res.data.act_hash3);
				setActPrice1(res.data.act_price1);
				setActPrice2(res.data.act_price2);
				setActPrice3(res.data.act_price3);
				setSum(res.data.sum);
			})
			.catch((err) => console.log('오류', err));
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
						<Single
							onClick={() =>
								Router.push({
									pathname: '/single',
									query: { id: sID },
								})
							}
						>
							혼자
						</Single>
						<Couple
							onClick={() =>
								Router.push({
									pathname: `/couple`,
									query: { id: cID },
								})
							}
						>
							연인
						</Couple>
						<Friends>친구</Friends>
					</Row>
				</Header>

				<Img src={result_img} />
				<Destination>#{city}_1박2일</Destination>
				<Course>
					<R>
						<FinalPrice>{sum}원</FinalPrice>
						<Badge>최저가</Badge>
					</R>
					<Desc>
						{room_name} {room_price}원
						<br />
						{act_price1 !== 0 && (
							<>
								{act_name1} {act_price1}원
								<br />
							</>
						)}
						{act_price2 !== 0 && (
							<>
								{act_name2} {act_price2}원
								<br />
							</>
						)}
						{act_price3 !== 0 && (
							<>
								{act_name3} {act_price3}원
								<br />
							</>
						)}
						{sum - room_price - act_price1 - act_price2 - act_price3}원
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
					<Name>{room_name}</Name>
					<Exp>{room_detail}</Exp>
					<Swipe style={styles.root}>
						<SwipeableViews
							index={index}
							onChangeIndex={handleChangeIndex}
							enableMouseEvents
						>
							<div style={Object.assign({}, styles.slide, styles.slide1)}>
								<Room src={room_img1} />
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide2)}>
								<Room src={room_img2} />
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide3)}>
								<Room src={room_img3} />
							</div>
						</SwipeableViews>
						<Pagination
							dots={3}
							index={index}
							onChangeIndex={handleChangeIndex}
						/>
					</Swipe>
					<Hashtag>{room_hash}</Hashtag>
				</Info>
				<Info>
					<Reserv>예약 액티비티</Reserv>
					{act_price1 && (
						<>
							<Name>{act_name1}</Name>
							<Exp>{act_detail1}</Exp>
							<CImg src={act_img1}></CImg>
							<Hashtag>{act_hash1}</Hashtag>
						</>
					)}
					{act_price2 && (
						<>
							<Name>{act_name2}</Name>
							<Exp>{act_detail2}</Exp>
							<CImg src={act_img2}></CImg>
							<Hashtag>{act_hash2}</Hashtag>
						</>
					)}
					{act_price3 && (
						<>
							<Name>{act_name3}</Name>
							<Exp>{act_detail3}</Exp>
							<CImg src={act_img3}></CImg>
							<Hashtag>{act_hash3}</Hashtag>
						</>
					)}
				</Info>
				<Gray></Gray>
				<Info>
					<Type>식당/카페</Type>
					<Name>{meal_name1}</Name>
					<Exp>{meal_detail1}</Exp>
					<Price>
						<Won src="/m.png" />
						{meal_price1}
					</Price>
					<CImg src={meal_img1}></CImg>
					<Hashtag>{meal_hash1}</Hashtag>
				</Info>
				<Info>
					<Name>{meal_name2}</Name>
					<Exp>{meal_detail2}</Exp>
					<Price>
						<Won src="/m.png" /> {meal_price2}
					</Price>
					<CImg src={meal_img2}></CImg>
					<Hashtag>{meal_hash2}</Hashtag>
				</Info>
				<Info>
					<Name>{meal_name3}</Name>
					<Exp>{meal_detail3}</Exp>
					<Price>
						<Won src="/m.png" />
						{meal_price3}
					</Price>
					<CImg src={meal_img3}></CImg>
					<Hashtag>{meal_hash3}</Hashtag>
				</Info>
				<Info>
					<Name>{meal_name4}</Name>
					<Exp>{meal_detail4}</Exp>
					<Price>
						<Won src="/m.png" /> {meal_price4}
					</Price>
					<CImg src={meal_img4}></CImg>
					<Hashtag>{meal_hash4}</Hashtag>
				</Info>
				<Info>
					<Name>{meal_name5}</Name>
					<Exp>{meal_detail5}</Exp>
					<Price>
						<Won src="/m.png" /> {meal_price5}
					</Price>
					<CImg src={meal_img5}></CImg>
					<Hashtag>{meal_hash5}</Hashtag>
				</Info>
				<Info>
					<Name>{meal_name6}</Name>
					<Exp>{meal_detail6}</Exp>
					<Price>
						<Won src="/m.png" /> {meal_price6}
					</Price>
					<CImg src={meal_img6}></CImg>
					<Hashtag>{meal_hash6}</Hashtag>
				</Info>

				<Info>
					{act_price1 === 0 && (
						<>
							<Name>{act_name1}</Name>
							<Exp>{act_detail1}</Exp>
							<CImg src={act_img1}></CImg>
							<Hashtag>{act_hash1} </Hashtag>
						</>
					)}
					{act_price2 === 0 && (
						<>
							<Name>{act_name2}</Name>
							<Exp>{act_detail2}</Exp>
							<CImg src={act_img2}></CImg>
							<Hashtag>{act_hash2} </Hashtag>
						</>
					)}
					{act_price3 === 0 && (
						<>
							<Name>{act_name3}</Name>
							<Exp>{act_detail3}</Exp>
							<CImg src={act_img3}></CImg>
							<Hashtag>{act_hash3} </Hashtag>
						</>
					)}
				</Info>
				<Bottom>
					<Link href="/warning">
						<Replay>다시 하기</Replay>
					</Link>

					<Button
						onClick={() =>
							Router.push({
								pathname: '/friends_confirm',
								query: { city: city },
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
const CImg = styled.div`
	width: 100%;
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
