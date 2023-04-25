import React from 'react'
import { Link } from 'react-router-dom';
import "../Css/pro.css"



function Sidebar_1() {

  const cardStyle = {
    textDecoration: 'none',
    color: '#263238',
  }

  return (
    <div className='area1'>

      <div class="flex-shrink-0 p-3 bg-white" style={{ width: '110px', height: '100' }}>
        <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <svg class="bi me-2" width="30" height="24"></svg>
          <span class="fs-5 fw-semibold">TANG</span>
        </a>
        <ul class="list-unstyled ps-0">


          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              제품
            </button>
            <div class="collapse" id="home-collapse"> {/* class에 collapse show면 열린상태 */}
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <br />
                <Link to={"/R1"} style={cardStyle}>로봇청소기</Link>
                <br />
                <br />
                <Link to={"/R2"} style={cardStyle}>로봇쓰레기통</Link>
                <br />
                <br />
                <Link to={"/R3"} style={cardStyle}>인공지능스피커</Link>
              </ul>
            </div>
          </li>


          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              보드
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <br />
                <Link to={"/#"} style={cardStyle}>아두이노</Link>
                <br />
                <br />
                <Link to={"/#"} style={cardStyle}>라즈베리파이</Link>
                <br />
                <br />
                <Link to={"/#"} style={cardStyle}>STM</Link>
              </ul>
            </div>
          </li>


          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              회원
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <br />
                <Link to={"/useredit"} style={cardStyle}>회원정보</Link>
                <br />
                <br />
                <Link to={"/userrepport"} style={cardStyle}>문희사항</Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )

}

export default Sidebar_1;
