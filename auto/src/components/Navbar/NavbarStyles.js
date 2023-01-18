import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
	flex-flow: wrap;
	
`; // Navbar.js의 1번 밖 ( 최상단 )


export const NavIcon = styled.img`
	margin-right: 52rem;
	width: 10rem;
    cursor: pointer;
`;// 로고 사이즈

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
	flex-flow: wrap;
`;// Navbar.js의 3번 밖 ( 로고 )


