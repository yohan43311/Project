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
    
	&:before {
		background: #B7B7B7;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: orange;
	}
`;