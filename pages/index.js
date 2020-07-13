import React from 'react';
import styled from 'styled-components';

import Intro from '../src/components/Intro';

export default function Home() {
	return (
		<Wrapper>
			<Intro />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
