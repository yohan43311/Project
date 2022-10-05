import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/main">
                        팀 이름은 미정
                    </Link>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                소개
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/pageint" href="#">페이지 소개</Link></li>
                                <li><Link className="dropdown-item"  to="/pagesite" href="#">사이트 맵</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                제품
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item"  to="/product" href="#">제품 소개 및 판매</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                회원
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item"  to="/usered" href="#">정보수정</Link></li>
                                <li><Link className="dropdown-item"  to="/usermu" href="#">문의사항</Link></li>
                            </ul>
                        </li>
                    </ul>

                    


                        <Link className="btn btn-outline-light" to="/adduser">
                            로그인
                        </Link>
                </div>
            </nav>
        </div>
    );
}