import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../Css/AllCss.css"


export default function Navbar() {

    const cardStyle={
        paddingLeft: 1, 
        textDecoration: 'none',
        color: '#E0E0E0'
    }


    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark mx-5">
                
                    <Link className="navbar-brand nvBar" to="/main">
                        팀 이름은 미정
                    </Link>
                    
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item dropdown mx-5">
                            <a className="nav-link dropdown-toggle mx-3" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                소개
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/pageint" href="#">페이지 소개</Link></li>
                                <li><Link className="dropdown-item"  to="/pagesite" href="#">사이트 맵</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown mx-5">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                제품
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item"  to="/pro" href="#">제품 소개 및 판매</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown mx-5">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                회원
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item"  to="/usered" href="#">정보수정</Link></li>
                                <li><Link className="dropdown-item"  to="/usermu" href="#">문의사항</Link></li>
                            </ul>
                        </li>
                    </ul>
                
                    
                    <div className="login_right">
                        <Link to={"/login"} className="card-link mx-3"  style={cardStyle}>
                                로그인
                        </Link>

                        <Link to={"/join"} className="card-link mx-3"  style={cardStyle}>
                                회원가입
                        </Link>
                    </div>
            </nav>
        </div>
    );
}