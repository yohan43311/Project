import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 6rem;
`;

export const HeroButton = styled(Button)`
	color: black;
	border-radius: 10px;

	&:before {
		background: #ededed;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: orange;
	}
`;

export const MarketButton = styled(Button)`
	color: white;
	border-radius: 10px;

	&:before {
		background: #FF9933;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: #FF9933;
	}
`;