import React, { useCallback } from 'react';
import './css/index.css';
import { useSelector } from 'react-redux';
function Profile() {

  const session = useSelector(state => state.auth.session)

  const __onsubmit = useCallback(
    (e) => {
      e.preventDefault()
      console.log('submit!');
    },
    [],
  )

  return (
    <div className="profile">
      <div className="wrapper">
        <div className="info">
          <div className="profile-image"></div>
          <div className="profile-desc">
            <div className="nickname">{session.displayName}</div>
            {true ? (
              <form className="qoute" onSubmit={__onsubmit}>
                <textarea defaultValue={session.qoute ? session.qoute : undefined}
                  placeholder="자신의 한줄 평을 입력해주세요."></textarea>
              </form>
            ) : (
              <>
                <div className="qoute">
                  오늘은 새신발을 사서 기부니가 매우 좋은날이에유 저녁에 러닝을 한번 더 해볼까
                  고민이 되는 날이네유 춥지도 않고 봄이 온다아앙!!!
                </div>
                <div className="follow-btn txt-bold">팔로우 하기</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
