import { red } from '@mui/material/colors';
import React from 'react'
import { Link } from "react-router-dom";
import "../Css/pro.css"

function Pro() {
  const cardStyle = {
    paddingLeft: 1,
    textDecoration: 'none',
    color: '#263238'
  }


  return (


    <div class="container">

      <br />
      <div className='pro_img'>
        {/*  이것은 이미지 슬라이드 입니다 */}
        <div id="r1" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="10000">

              <img src="7.png" className="d-block w-100" />

              <div className="carousel-caption d-none d-md-block">
                <img src="pro2.png" className='img1' />
                <p className='text1'>로봇 쓰레기통</p>
                <hr className='line'></hr>
                <p className='text2'>모든지 다 잡아 넣어용</p>
                <Link to="/R2">
                  <button className='button1' type='button'>구매</button>
                </Link>
              </div>
            </div>


            <div className="carousel-item" data-bs-interval="2000">
              <img src="7.png" className="d-block w-100" />

              <div className="carousel-caption d-none d-md-block">
                <img src="pro1.png" className='img1' />
                <p className='text1'>카카오 로봇 청소기</p>
                <hr className='line'></hr>

                <p className='text2'> 얼마나 예쁘게요~ </p>
                <Link to="/R1">
                  <button className='button1' type='button'>구매</button>
                </Link>
              </div>
            </div>


            <div className="carousel-item">
              <img src="7.png" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <img src="pro3.png" className='img1' />
                <p className='text1'>네이버 클로바</p>
                <hr className='line'></hr>
                <p className='text2'>음질 최고 너무 좋아</p>
                <Link to="/R3">
                  <button className='button1' type='button'>구매</button>
                </Link>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#r1" data-bs-slide="prev">
            <span>Pre</span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#r1" data-bs-slide="next">
            <span>Next</span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
      </div>
      <div>
        <hr/>
      </div>


      <div class="row">
        <div class="col mx-1 my-4" >
          <div className="mx-auto" style={{ width: '18rem' }}>
            <img src="pro1.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <br />
              <br />
              <h5 className='fontBold'>카카오 로봇청소기</h5>
              <p class="card-text">카카오에서 야심작으로 <br/>나온 귀요미 로봇청소기</p>
            </div>
            <br />
            <div class="card-body">
              <Link to="/R1" className="card-link mx-3" style={cardStyle}> 369000원</Link>
              <Link to="/R1" className="card-link mx-3" style={cardStyle}> 구매</Link>
            </div>
          </div>
        </div>
        <div class="col mx-1 my-4" >
          <div className="mx-auto" style={{ width: '18rem' }}>
            <img src="pro2.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <br />

              <br />
              <h5 className='fontBold'>로봇 쓰레기통</h5>
              <p class="card-text">알아서 받아주는 촤고급 로봇 쓰레기통</p>
            </div>
            <br />
            <br />
            <div class="card-body">
              <Link to="/R2" className="card-link mx-3" style={cardStyle}> 74900원</Link>
              <Link to="/R2" className="card-link mx-3" style={cardStyle}> 구매</Link>
            </div>
          </div>
        </div>
        <div class="col mx-1 my-4" >
          <div className="mx-auto" style={{ width: '18rem' }}>
            <img src="pro3.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <br />
              <h5 className='fontBold'>인공지능 스피커</h5>
              <p class="card-text">안녕 나는 최고의 <br/>인공지능 스피커 클로버야~</p>
            </div>
            <br />
            <div class="card-body">
              <Link to="/R3" className="card-link mx-3" style={cardStyle}> 159000원</Link>
              <Link to="/R3" className="card-link mx-3" style={cardStyle}> 구매</Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

    </div>


  )
}


export default Pro;
