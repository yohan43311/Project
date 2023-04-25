import React from 'react';
import './css/index.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='logo'>
                    <img src='/assets/welcome/logo.svg' alt='로고' />
                </div>
                <nav className='navigation'>
                    <ul className='nav-wrapper'>
                        <il className='nav'>
                            <img src='/assets/header/feed-dac.svg' alt='피드로 가기' />
                        </il>
                        <Link to='/profile'>
                            <il className='nav'>
                                <img src='/assets/header/profile-dac.svg' alt='프로필로 가기' />
                            </il>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
