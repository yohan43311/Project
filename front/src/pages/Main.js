import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Font from "../Css/Font.css"
import Footer from '../layout/Footer';

export default function Main() {

    const cardStyle={
        paddingLeft: 13, 
        textDecoration: 'none',
        color: '#263238'
    }

    return (
        <div className='wrap'>
            <br/>
            <div className='container'>
                {/*  이것은 이미지 슬라이드 입니다 */}
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://media.wired.jp/photos/61cebf50e533d60bb2d608b6/master/w_2560%2Cc_limit/342dc07fca26f593dfe3a4a39d7690be.jpg" className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='fontBold'>당신의 친구</h5>
                                <p>" 나랑 친구할래? "</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://cdn.aitimes.kr/news/photo/202101/18889_20836_2527.jpg" className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='fontBold'>깔끔한 외형</h5>
                                <p>" 심장에 구멍도 뚫려있음! "</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="http://www.irobotnews.com/news/photo/201704/10465_23692_19.png" className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='fontBold'>식사 가능</h5>
                                <p >" 나도 먹을래 "</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
            </div>


            {/*  이것은 상품 목록 입니다 */}
            <div className='container'>
                <div class="row">
                    <div class="col mx-1 my-4" >
                        <div className="mx-auto" style={{ width: '18rem' }}>
                            <img src="https://static-clova.pstatic.net/static/8e2f245/img/bridge/img_clova_clock_plus2.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <br/>
                                <h5 className='fontBold'>Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <br/>
                            <div class="card-body">
                                <Link to="#" className="card-link"  style={cardStyle}> 구매할게</Link>
                                <Link to="#" className="card-link"  style={cardStyle}> 이건좀;;</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-1 my-4" >
                        <div className="mx-auto" style={{ width: '18rem' }}>
                            <img src="https://static-clova.pstatic.net/static/8e2f245/img/bridge/img_clova_friends_mini.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <br/>
                                <h5 className='fontBold'>Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <br/>
                            <div class="card-body">
                                <Link to="#" className="card-link"  style={cardStyle}> 구매할게</Link>
                                <Link to="#" className="card-link"  style={cardStyle}> 이건좀;;</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mx-1 my-4" >
                        <div className="mx-auto" style={{ width: '18rem' }}>
                            <img src="https://static-clova.pstatic.net/static/8e2f245/img/bridge/img_clova_wave.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <br/>
                                <h5 className='fontBold'>Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <br/>
                            <div class="card-body">
                                <Link to="#" className="card-link"  style={cardStyle}> 구매할게</Link>
                                <Link to="#" className="card-link"  style={cardStyle}> 이건좀;;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        


    )
}
