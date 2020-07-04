import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';

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
	return (
		<Wrapper>
			<Title> 코스 2 </Title>

			<Form action="/check">
				{/*<Calendar />*/}
				<Label>이름</Label>

				<Input
					onChange={handleFormChange}
					placeholder="이름을 입력해주세요"
					type="text"
					name="name"
				/>
				<Label>연락처</Label>
				<Input
					placeholder="연락처를 입력해주세요 ex)010-0000-0000"
					name="phone"
					onChange={handleFormChange}
				/>
				<Label>이메일</Label>
				<Input
					placeholder="이메일을 입력해주세요"
					type="email"
					name="email"
					onChange={handleFormChange}
				/>
				<Red>예약금 관련 안내</Red>

				<Margin></Margin>
				{/*<Link href="/check">*/}
				<Button onClick={() => handleSubmit(form)}>
					예약 가능여부 확인하기
				</Button>
				{/*</Link>*/}
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

const Img2 = styled.img`
	width: 30%;
	height: auto;
`;

const Input = styled.input`
	width: 70%;
	height: 2rem;
	margin-bottom: 1rem;
	text-align: center;
	border-radius: 0.5rem;
`;
const Form = styled.form`
	background-color: white;
	width: 80%;
	//margin: 20px 0px;
	//padding: 40px 40px;
	display: flex;
	flex-direction: column;
	//justify-content: space-around;
	align-items: center;
	border-radius: 15px;
	//box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
	//	0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Label = styled.div`
	font-size: 1rem;
	text-align: left;
`;
const Red = styled.div`
	font-size: 1rem;
	color: red;
`;
const Cont = styled.div`
	color: #f59f00;
	text-align: center;
	margin-bottom: 2rem;
`;
