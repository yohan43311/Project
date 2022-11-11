import { Container } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import "../Css/pro.css"
import Sidebar_1 from "../layout/Sidebar_1"
import Vivi_3 from "../Video/0927_2.mp4";





function R1() {


  return (

    <div class="container">





      <Sidebar_1 />
     
      <div class="area2">

        <div class='area2_title'>
          <p className='title'>카카오 인공지능스피커(URJU2F323L3) 상세참조</p>


        </div>
        <div className='R1_img'>


          {/*  이것은 이미지 슬라이드 입니다 */}
          <div id="r1" className="carousel carousel-dark slide" data-bs-ride="carousel">
           
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src="7.png" className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                  <img src="pro3.png" className='img2' />
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="7.png" className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                  <img src="pro22.png" className='img2' />
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img src="7.png" className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                  <img src="pro24.png" className='img2' />
                </div>
              </div>

            </div>

            <button className="carousel-control-prev-1" type="button" data-bs-target="#r1" data-bs-slide="prev">
              <span>Pre</span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next-2" type="button" data-bs-target="#r1" data-bs-slide="next">
              <span>Next</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <br />
        </div>

      </div>

      <div class='area3'>

        <div class='textR1'>
          <p className='textR1_1'>Prduct Info</p>
          <p className='text'>믿고 보는 네이버</p>
          <hr className='line_r1'></hr>
        </div>
        <div class='textR2'>
          <p className='textR1_1'>Delivery Info</p>
          <p className='text'>출고 정보/&nbsp; &nbsp;    결제3일 이내 출고</p>
          <p className='text'>배송 방법/&nbsp; &nbsp;  국내 배송/해외 배송</p>
          <hr className='line_r1'></hr>
        </div>
        <div class='textR3'>
          <p className='textR1_1'>Price Info</p>
          <p className='text'>판매가격 &nbsp; &nbsp; 127000원</p>
          <p className='text'>회원특가 &nbsp; &nbsp; 109900원</p>
          <hr className='line_r1'></hr>
        </div>
        <div className='b1'>
          <Link to="/adduser">
            <button className='buttonbb' type='button'>바로구매</button>
          </Link>
        </div>

      </div>
      <div class='area4'>
        <div class='t1'>

          <table class="table table table-bordered">
            <tbody>
              <tr align="center" bgcolor="white">
                <th scope="col">상품정보</th>
                <td>7378219233</td>
                <th scope="col">상품상태</th>
                <td>미개봉 신품</td>
              </tr>


              <tr align="center" bgcolor="white">
                <th scope="low">제조사</th>
                <td>탕탕특공대</td>
                <th scope="low">브랜드</th>
                <td>탕탕</td>
              </tr>
              <tr align="center" bgcolor="white">
                <th scope="low">모델명</th>
                <td>KLR384RI393</td>
                <th scope="low">원산지</th>
                <td>이탈리아</td>
              </tr>
              <tr align="center" bgcolor="white">
                <th scope="low">제조일자</th>
                <td>2022.05.27</td>
                <th scope="low">담당자</th>
                <td>KIM MIN SOO</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <p class="pre_text1" style={{color: 'orange'}}>네이버 클로바</p>
          <br />
          <p class="pre_text2">네이버 클로바</p>
        </div>

        <div>

          <img src="pro21.png" className="pre_img1" />
         <div class = "textbox1"> <p class="pre_text1">360° 사운드</p>
          <p class="pre_text2">왜곡 없는 사운드</p></div> 
        </div>
       
        <div>

          <img src="pro22.png" className="pre_img2" />
          <div class = "textbox2"><p class="pre_text1">음성인식 기능으로</p>
          <p class="pre_text2">손쉽게 명령 및 제어</p></div> 
        </div>
       
        <div>

          <img src="pro23.png" className="pre_img3" />
          <div class = "textbox3"><p class="pre_text1">경량화된 무게</p>
          <p class="pre_text2">휴대가 쉬워진</p></div> 
        </div>
      
        <div>

          <img src="pro24.png" className="pre_img4" />
          <div class = "textbox4"> <p class="pre_text1">홍보영상</p>
          <p class="pre_text2">- 이 외의 기기 -</p></div> 
        </div>
       
        <div class='v1'>
          <video className='video_4' controls width="700">
            <source src={Vivi_3}></source>
          </video>
        </div>


      </div>

  
</div>
  )

}
export default R1;
