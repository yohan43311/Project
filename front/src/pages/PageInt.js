import React from 'react'
import Vivi from "../Video/twinny.mp4";
import Vivi_2 from "../Video/0927.mp4";
import Vivi_3 from "../Video/0927_2.mp4";
import Vivi_4 from "../Video/0927_3.mp4";
import Vivi_5 from "../Video/0927_4.mp4";
import Sidebar from '../pages/Sidebar';
import Timage from '../pages/tust.png'



function PageInt() {

  return (
    <div className='container'>
      <div className='row'>

        <Sidebar />
        <div class="col-10">
          <div className='pageint_video_1'>
            <br />
            <br />
            <br />
            <br />
            <h1>TANG TANG</h1>
            <p className='page_2'>자율주행로봇 전문기업 TANG TANG Intro</p>

            <video className='video_3' controls width="700">
              <source src={Vivi_3}></source>
            </video>
          </div>
        </div>
        <div className='contianer'>
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* 페이지 소개 전 제품 소개 */}

        <div className='pageint_container_1'>
          <h1 className='pageint_lee'>
            더 넓은 곳에서,
            <br />
            더 많은 이들이,
            <br />
            자율주행의 편리함을 경험할 수 있도록
            <br />
            <span class="txt_name">TANG TANG</span>
            <br />
            <br />
          </h1>

          <p className='txt_name_2'>
            <br />
            탕탕은 자율주행 기술을 기반으로 일상을 더욱 편리하게 만드는 기업으로서,
            <br />
            자율주행로봇과 플랫폼 서비스를 통해 모든 이들이 자율주행로봇 서비스를 경험할 수 있도록,
            <br />
            누구보다 빠르게 앞장서고 있습니다.
          </p>
        </div>
        {/* 페이지 소개 전 제품 소개 */}

        <div class="pageint_vidio">

          <video className='video_1' controls width="500" height={300} style={{ float: 'left' }}>
            <source src={Vivi}></source>
          </video>

          <video className='video_2' controls width="500" height={300} style={{ float: 'right' }}>
            <source src={Vivi_2}></source>
          </video>

          <video className='video_1' controls width="500" height={300} style={{ float: 'left' }}>
            <source src={Vivi_5}></source>
          </video>

          <video className='video_2' controls width="500" height={300} style={{ float: 'right' }}>
            <source src={Vivi_4}></source>
          </video>


        </div>
        <article>
          <div className='pageint_container_2'>
            <h1 className='pageint_nuam'>
              <br />
              경영이념
            </h1>
            <div className="row text-center">
              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  신뢰
                  <span>Trust</span>
                </h3>
                <p class="dist-img">
                  <img src={Timage} />
                </p>
                <p class='dist-tit'>
                  직원과 고객과의 신뢰를
                  <br/>
                  최선으로 생각합니다.
                </p>
              </div>

              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  신뢰
                  <span>Trust</span>
                </h3>
                <p class="dist-img">
                  <img src={Timage} />
                </p>
                <p class='dist-tit'>
                  직원과 고객과의 신뢰를
                </p>
              </div>

              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  신뢰
                  <span>Trust</span>
                </h3>
                <p className="pageint_img">
                  <img src={Timage} />
                </p>
                <p class='dist-tit'>
                  직원과 고객과의 신뢰를
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>


    </div>

  )
}

export default PageInt;
