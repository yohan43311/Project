import React from 'react'
import Vivi from "../Video/twinny.mp4";
import Vivi_2 from "../Video/0927.mp4";
import Vivi_3 from "../Video/0927_2.mp4";
import Vivi_4 from "../Video/0927_3.mp4";
import Vivi_5 from "../Video/0927_4.mp4";
import Sidebar from '../pages/Sidebar';
import Timage from '../pages/tust.png';
import Timage_1 from '../pages/yun.png';
import Timage_2 from '../pages/bo.png';





function PageInt() {

  return (
    <div className='container'>
      <div className='row'>

        <Sidebar />
        <div class="col-10 mx-3">
          <div className='pageint_video_1'>
            <br />
            <br />
            <br />
            <br />
            <h1>TANG TANG</h1>
            <p className='page_2'>쓰레기로봇 전문기업 TANG TANG Intro</p>

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
            쓰레기의 편리함을 경험할 수 있도록
            <br />
            <span class="txt_name">TANG TANG</span>
            <br />
            <br />
          </h1>

          <p className='txt_name_2'>
            <br />
            탕탕의 기술을 기반으로 일상을 더욱 편리하게 만드는 기업으로서,
            <br />
            쓰레기로봇과 플랫폼 서비스를 통해 모든 이들이 쓰레기로봇 서비스를 경험할 수 있도록,
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
            <br />
            <div className="row text-center">
              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  신뢰
                  <span className='leenum'>Trust</span>
                </h3>
                <p className="dist-img_1">
                  <img src={Timage} alt="/" width="auto" height="300" />
                </p>
                <p class='dist-tit'>
                  직원과 고객과의 신뢰를
                  <br />
                  최선으로 생각합니다.
                </p>
              </div>

              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  윤리
                  <span className='leenum'>Ethics</span>
                </h3>
                <p class="dist-img">
                  <img src={Timage_1} alt="/" width="auto" height="300" />
                </p>
                <p class='dist-tit'>
                  기업윤리를 준수하여
                  <br />
                  공존공영합니다.
                </p>
              </div>

              <div class='col-md-4 col-sm-4 col-xs-12'>
                <h3 class='sub-stit bottom-pad-30'>
                  품질
                  <span className='leenum'>Quality</span>
                </h3>
                <p className="pageint_img">
                  <img src={Timage_2} alt="/" width="auto" height="300" />
                </p>
                <p class='dist-tit'>
                  품질을 보증하여 고객에게
                  <br />
                  감동을 선사합니다.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className='yeanhyeok_1'>
          <br />
          <h1>연혁</h1>
          <br />
          <h1>쑤레기로봇이 곧
            <span className='yeanhyeok'> 탕탕</span>
            이 되는
            <br />
            그 날까지 -
          </h1>

        </article>
      </div>


    </div>

  )
}

export default PageInt;
