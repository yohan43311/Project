import React from 'react'
import { Link } from 'react-router-dom';




function Sidebar() {

  const cardStyle = {
    textDecoration: 'none',
    color: '#263238'

  }

  return (
    
      <div class="flex-shrink-0 p-3 bg-white" style={{ width: '100px' }}>
        <a class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <svg class="bi me-2" width="30" height="24"></svg>
          <span class="fs-5 fw-semibold">TWINNY</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              소개
            </button>
            <div className="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <Link to={"/pageint"} style={cardStyle}>페이지 소개</Link>
              <Link to={"/pagesite"} style={cardStyle}>사이트 맵</Link>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              제품
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <Link to={"/product"} style={cardStyle}>제품 소개 및 판매</Link>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              플랫폼
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <Link to={"/plet"} style={cardStyle}>보드</Link>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              회원
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <Link to={"/usered"} style={cardStyle}>정보 수정 </Link>
              <Link to={"/usermu"} style={cardStyle}>문의 사항 </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Sidebar;
