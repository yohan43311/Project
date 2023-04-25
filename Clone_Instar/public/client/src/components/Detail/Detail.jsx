import React from 'react';
import './css/index.css';

function Detail() {
    return (
        <div className='feed-detail'>
            <div className='bg'></div>
            <div className='wrapper'>
                <div className='close'>
                    <img src='/assets/feed/close.svg' alt='닫기' />
                </div>
                <div className='main-image'></div>
                <div className='contents'>
                    <div className='feed-content'>
                        <div className='top'>
                            <div className='profile-image'></div>
                            <div className='feed-desc'>
                                <div className='nickname txt-bold'>THE SNKRZ OFFICIAL</div>
                                <div className='timestamp'>8:15pm, now</div>
                            </div>
                        </div>

                        <div className='body'>
                            [ 토크노믹스 2.0 update]<br /><br />

                            상장일 : 2023.03.17<br />
                            거래소 : 업비트, 코인원, 빗썸<br />
                            코인명 : FIT<br /><br />

                            브반 꿀로 인하여 상장가는 2달러로 시작합니다.
                        </div>

                        <div className='bottom'>
                            <div className='like'>
                                <div className='asset'>
                                    <img src='/assets/feed/like-dac.svg' alt='좋아요' />
                                </div>
                                <div className='title txt-bold'>25k</div>
                            </div>
                            <div className='comment'>
                                <div className='asset'>
                                    <img src='/assets/feed/comment.svg' alt='댓글' />
                                </div>
                                <div className='title txt-bold'>2k</div>
                            </div>
                        </div>
                    </div>
                    <div className='feed-comments'>
                        <div className='comment-form comment'>
                            <div className='top'>
                                <div className='left'>
                                    <div className='profile-image'></div>
                                    <div className='feed-desc'>
                                        <div className='nickname txt-bold'>Earth</div>
                                        <div className='timestamp'>8:16pm, now</div>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='like'>
                                        <div className='asset'>
                                            <img src='/assets/feed/like-dac.svg' alt='좋아요' />
                                        </div>
                                        <div className='title txt-bold'>34k</div>
                                    </div>
                                    <div className='reply-btn'>답글</div>
                                </div>
                            </div>
                            <div className='body'>
                                볼트만세!!!
                            </div>
                        </div>


                        <div className='comment-form reply'>
                            <div className='top'>
                                <div className='left'>
                                    <div className='profile-image'></div>
                                    <div className='feed-desc'>
                                        <div className='nickname txt-bold'>ssunoo</div>
                                        <div className='timestamp'>8:17pm, now</div>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='like'>
                                        <div className='asset'>
                                            <img src='/assets/feed/like-dac.svg' alt='좋아요' />
                                        </div>
                                        <div className='title txt-bold'>34k</div>
                                    </div>
                                    <div className='reply-btn'>답글</div>
                                </div>
                            </div>
                            <div className='body'>
                                수구
                            </div>
                        </div>

                        <div className='comment-form comment '>
                            <div className='top'>
                                <div className='left'>
                                    <div className='profile-image'></div>
                                    <div className='feed-desc'>
                                        <div className='nickname txt-bold'>Brococoli boy</div>
                                        <div className='timestamp'>8:17pm, now</div>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='like'>
                                        <div className='asset'>
                                            <img src='/assets/feed/like-dac.svg' alt='좋아요' />
                                        </div>
                                        <div className='title txt-bold'>34k</div>
                                    </div>
                                    <div className='comment-form reply-btn'>답글</div>
                                </div>
                            </div>
                            <div className='body'>
                                엠투이 다 죽어라
                            </div>
                        </div>

                        <div className='comment-form comment '>
                            <div className='top'>
                                <div className='left'>
                                    <div className='profile-image'></div>
                                    <div className='feed-desc'>
                                        <div className='nickname txt-bold'>고유일</div>
                                        <div className='timestamp'>8:18pm, yesterday</div>
                                    </div>
                                </div>
                                <div className='right'>
                                    <div className='like'>
                                        <div className='asset'>
                                            <img src='/assets/feed/like-dac.svg' alt='좋아요' />
                                        </div>
                                        <div className='title txt-bold'>
                                            34k
                                        </div>
                                    </div>
                                    <div className='comment-form reply-btn'>
                                        답글
                                    </div>
                                </div>
                            </div>
                            <div className='body'>
                                위믹스 물림...살려주셈
                            </div>
                        </div>
                    </div>
                    <div className='feed-write-comment'>
                        <div className='profile-image'></div>
                        <div className='write-comment'>
                            <input type='text' placeholder='댓글을 남겨주세요!' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
