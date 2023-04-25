import React from 'react'

import { Link } from "react-router-dom";
import { Nav,NavIcon,NavLogo } from './NavbarStyles.js';

export default function Navbar() {
  return (
    <>
    <Nav>
    <NavLogo to="/">
        <NavIcon src="./assets/HwangBit_2.png" alt="logo"/>
        </NavLogo>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
      <Link to="/signuppage">
        <button>로그인</button>
      </Link>
      </Nav>
    </>
  );
}

