import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';
import { DatePicker } from 'antd';

export default function Confirm() {
	const [form, setForm] = useState({
		username: '',
		phone: '',
		email: '',
		date: '',
		res_course: '연인',
	});
	const handleDateChange = (value) => {
		console.log(
			`여행시작날짜: ${value ? value[0].format('MM월 DD일') : 'None'}`
		);
		form.date = value[0].format('MM월 DD일');
		console.log(` 전송 : ${form.date}`);
	};
	const handleFormChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {
		const { username, phone, email, res_course, date } = form;
		if (username.length === 0 || phone.length === 0 || email.length === 0) {
			alert('모든 항목을 입력해주세요!');
			return false;
		} else {
			console.log(res_course);
			console.log(date);
			console.log(username);
			console.log(email);
			console.log(phone);

			//axios
			//.post(process.env.local.API_HOST+"/reservation",form)
			//.then((response) => {
			//	console.log(response);
			//	console.log(form.name);
			//	console.log(form.email);
			//	console.log(form.phone);
			//})
			//.catch((err)=>console.log(err));
			Router.push('/check');
		}
	};

	const { RangePicker } = DatePicker;
	const pickerStyle = {
		width: '100%',
		height: '6rem',
		border: 'solid 0.1rem #333333',
		borderRadius: '0.5rem',
		fontSize: '2rem',
		color: 'black',
	};
	const popupStyle = {
		width: 'auto',
	};
	return (
		<Wrapper>
			<R>
				<Back onClick={() => Router.back()}>〈 </Back>
				<Title>#통영_1박2일 #연인</Title>
			</R>
			<Label>여행 날짜</Label>
			<RangePicker
				onChange={handleDateChange}
				format="MM월 DD일"
				separator="〉"
				style={pickerStyle}
				placeholder={['체크인', '체크아웃']}
				popupStyle={popupStyle}
			/>
			<p
				style={{
					color: '#eb5757',
					fontSize: '1rem',
					fontWeight: 300,
					marginTop: '0.9rem',
				}}
			>
				꼭 1박2일 일정으로 신청해주세요!
			</p>

			<Form>
				<Label>여행자 이름</Label>
				<Input
					onChange={handleFormChange}
					placeholder="예약을 위해 필요한 정보입니다."
					type="text"
					name="name"
				/>

				<Label>전화번호</Label>
				<Input
					placeholder="예약을 위해 필요한 정보입니다."
					name="phone"
					onChange={handleFormChange}
				/>

				<Label>이메일</Label>
				<Input
					placeholder="PDF 전송을 위해 필요한 정보입니다."
					type="email"
					name="email"
					onChange={handleFormChange}
				/>

				<Announce>
					입력해주신 연락처로 예약 가능 여부,
					<br />
					예약금 관련 안내 및 여행코스를 전송해드립니다.
					<br />
					정확하게 입력했는지 다시 한번 확인 부탁드립니다.
				</Announce>
				<Button onClick={() => handleSubmit(form)}>
					예약 가능여부 확인하기
				</Button>
			</Form>
		</Wrapper>
	);
}

const R = styled.div`
	display: flex;
	margin-bottom: 4.8rem;
`;
const Back = styled.button`
	width: 3.2rem;
	padding: 0;
	padding-right: 2rem;
	:focus {
		outline: 0;
	}
	height: 3.2rem;
	color: black;
	background-color: white;
	border: none;
	font-size: 2.4rem;
	font-weight: bold;
`;
const Button = styled.button`
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	height: 4rem;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: #007aff;
	margin-top: 5.4rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding-top: 3rem;
	padding-right: 3rem;
	padding-left: 3rem;
	padding-bottom: 3rem;
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: bold;
	padding-left: 5rem;
	margin: 0;
	padding-top: 0.5rem;
`;

const Input = styled.input`
	width: 100%;
	height: 3.6rem;
	border-radius: 0.3rem;
	margin-bottom: 1.5rem;
	padding-left: 1rem;
	font-size: 1.3rem;
	background-color: #f0f0f0;
	color: #bdbdbd;
	border: none;
`;
const Form = styled.form`
	width: 100%;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	margin-top: 1.3rem;
`;

const Label = styled.div`
	font-size: 1.3rem;
	margin-bottom: 1.3rem;
	text-align: left;
	font-weight: normal;
`;
const Announce = styled.div`
	font-size: 1.3rem;
	font-weight: normal;
	color: #4f4f4f;
	padding-top: 3rem;
	padding-bottom: 3rem;
	text-align: center;
`;
