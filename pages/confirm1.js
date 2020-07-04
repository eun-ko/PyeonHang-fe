import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import axios from 'axios';
//import { DateRange } from 'react-date-range';
//import 'react-date-range/dist/styles.css'; // main css file
//import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Confirm() {
	const [form, setForm] = useState({ name: '', phone: '', email: '' });

	const handleFormChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const router = useRouter();
	const handleSubmit = (form) => {
		if (
			form.name.length === 0 ||
			form.phone.length === 0 ||
			form.email.length === 0
		) {
			alert('모든 항목을 입력해주세요!');
			return false;
		} else {
			setForm({ ...form });
			alert('입력되었습니다!');

			router.push('/check');
		}
	};

	//const [state, setState] = useState([
	//	{
	//		startDate: new Date(),
	//		endDate: null,
	//		key: 'selection',
	//	},
	//]);
	return (
		<Wrapper>
			<Title> 코스 1 </Title>
			{/*<DateRange
				editableDateInputs={true}
				onChange={(item) => setState([item.selection])}
				moveRangeOnFirstSelection={false}
				ranges={state}
			/>*/}
			<Form action="/check">
				<Row>
					<Label>이름</Label>
					<Input
						onChange={handleFormChange}
						placeholder="이름을 입력해주세요"
						type="text"
						name="name"
					/>
				</Row>
				<Row>
					<Label>연락처</Label>
					<Input
						placeholder="연락처를 입력해주세요 ex)010-0000-0000"
						name="phone"
						onChange={handleFormChange}
					/>
				</Row>
				<Row>
					<Label>이메일</Label>
					<Input
						placeholder="이메일을 입력해주세요"
						type="email"
						name="email"
						onChange={handleFormChange}
					/>
				</Row>
				<Red>예약금 관련 안내</Red>
				<Margin></Margin>
				<Button onClick={() => handleSubmit(form)}>
					예약 가능여부 확인하기
				</Button>
			</Form>
		</Wrapper>
	);
}
const Margin = styled.div`
	margin-bottom: 2rem;
`;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding-top: 4rem;
	align-items: center;
`;
const Title = styled.p`
	font-size: 1.4rem;
	margin: 1rem 0;
	font-weight: bold;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	justify-content: space-evenly;
`;
const Input = styled.input`
	width: 70%;
	height: 2rem;
	margin-bottom: 1rem;
	text-align: center;
	// border-radius: 0.5rem;
	// border: none;
	border: 1px solid blue;
`;
const Form = styled.form`
	background-color: white;
	width: 100%;
	//margin: 20px 0px;
	//padding: 40px 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 15px;
	//box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
	//	0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Label = styled.div`
	font-size: 1rem;
	text-align: center;
	margin: auto;
	margin-bottom: 1rem;
`;
const Red = styled.div`
	font-size: 1rem;
	color: red;
`;
