import React from 'react'
import { Link } from 'react-router-dom';
import Vivi from "../Video/twinny.mp4";
import Sidebar from './Sidebar';






function PageSite() {

  const cardStyle = {
    textDecoration: 'none',
    color: '#263238'
  }

  return (
    <div className='container'>
      <div className='row'>
      <Sidebar />
      <div class="col">

        <div class>
          <h1>TWINNY</h1>
          <p class>자율주행로봇 전문기업 TWINNY Intro</p>
          <video className='video' controls width="900">
            <source src={Vivi}></source>
          </video>
        </div>
    </div>


      </div>
    </div>
  )
}

export default PageSite;
