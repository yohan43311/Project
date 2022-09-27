import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from '../pages/Sidebar';



function PageInt() {

  const cardStyle = {
    textDecoration: 'none',
    color: '#263238'

  }

  return (
    <div className='container'>
      <div className='row'>

        <Sidebar />
        <div class="col">
          <div className='page_1'>
            <h1>TWINNY</h1>
            <p className='page_2'>자율주행로봇 전문기업 TWINNY Intro</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageInt;
