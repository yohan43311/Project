import React from 'react'
import { Link } from 'react-router-dom';
import "../Css/pro.css"


const LineDelete ={
  textDecoration:'none'
}


function Sidebar() {

  const cardStyle = {
    textDecoration: 'none',
    color: '#263238',
    

  }

  return (
    
    
    <div className= 'area1'>
   
   
   <div class ="side">
      
      <div class="flex-shrink-0 p-3 bg-white">
        <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <svg class="bi me-2" width="45" height="20"></svg>
          <span class="fs-5 fw-semibold">HOME</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              제품
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <br/>
                <li><a href="/R1" class="link-dark rounded" >로봇청소기</a></li>
                <br/>
                <li><a href="/R2" class="link-dark rounded" >로봇쓰레기통</a></li>
                <br/>
                <li><a href="/R3" class="link-dark rounded">인공지능스피커</a></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              보드
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
               <br/>
                <li><a href="#" class="link-dark rounded" >아두이노</a></li>
                <br/>
                <li><a href="#" class="link-dark rounded" >라즈베리파이</a></li>
                <br/>
                <li><a href="#" class="link-dark rounded" >STM</a></li>
                <br/>
               
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              회원
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <br/>
                <li><a href="#" class="link-dark rounded" >회원정보</a></li>
                <br/>
                <li><a href="#" class="link-dark rounded">문의사항</a></li>
               
              </ul>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
    </div>
   
  )

}

export default Sidebar;
