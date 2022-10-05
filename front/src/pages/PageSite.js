import React from 'react'
import { Link } from "react-router-dom";


function PageSite() {

  return (
    <div className='container_pagesite_1'>
      <div className='row'>
        <div className='col'>
          <ul className='pagesite_dot'>
            <li className='pagesite_up_1 mx-5'>
              <a>소개</a>
            </li>

          </ul>

          <hr />

          <ul>
            <li className='pagesite_int_1'>
            <Link className="dropdown-item" to="/pageint" href="#">페이지 소개</Link>
            
            </li>

            <li className='pagesite_int_1'>
            <Link className="dropdown-item" to="/pagesite" href="#">사이트 맵</Link>
            </li>

          </ul>
        </div>

        <div className='col'>
          <ul className='pagesite_dot'>
            <li className='pagesite_up_1 mx-5'>
              <a>제품</a>
            </li>

          </ul>

          <hr />

          <ul>
            <li className='pagesite_int_2'>
            <Link className="dropdown-item"  to="/product" href="#">제품 소개 <br/>및 판매</Link>
            </li>
          </ul>
        </div>

        <div className='col'>
          <ul className='pagesite_dot'>
            <li className='pagesite_up_1 mx-5'>
              <a>회원</a>
            </li>

          </ul>

          <hr />

          <ul>
            <li className='pagesite_int_3'>
            <Link className="dropdown-item"  to="/usered" href="#">정보수정</Link>
            </li>

            <li className='pagesite_int_3'>
            <Link className="dropdown-item"  to="/usermu" href="#">문의사항</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>



  )

}

export default PageSite;
