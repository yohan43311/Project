import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Login from './Login/Login';
import Join from './Join/Join';
import MainFeed from './MainFeed/MainFeed';
import Header from './Header/Header';
import Detail from './Detail/Detail';
import Profile from './Profile/Profile';
import firebaseApp from '@config/firebaseApp';
import { useDispatch, useSelector } from 'react-redux';
import { __NICKNAME_SERVICE_UPDATE__ } from '@dispatchers/config';
import { __UPDATE_SESSION__ } from '@dispatchers/auth';
import { __UPDATE_HEADER_STATE__ } from '@dispatchers/layouts';

const Fauth = firebaseApp.auth()
const Fdatabase = firebaseApp.database();

function App() {
  const dispatch = useDispatch()
  const isHeaderOpen = useSelector(state => state.layouts.isHeaderOpen)
  // 리덕스에서 특정한 값을 업데이트 할때
  const __getNicknames = useCallback(
    () => {
      const nicknameRef = Fdatabase.ref('/statics/nicknames')

      nicknameRef.on('value', snapshot => {
        if (snapshot.exists()) {
          // 데이터가 존재할때는 리덕스 상태로 닉네임리스트를 업데이트
          dispatch({
            type: __NICKNAME_SERVICE_UPDATE__,
            payload: Object.values(snapshot.val())
          });
        } else {
          // 데이터가 없을때는 반 배열을 업데이트
          dispatch({
            type: __NICKNAME_SERVICE_UPDATE__,
            payload: []
          });
        }
      })

      return nicknameRef
      // 앱이 꺼지거나 특수한 상황이면 실시간 업뎃 없애기 위해 useEffet 부분에 넣음
    }, [dispatch]);

  useEffect(() => {
    const nicknameRef = __getNicknames();
    return () => {
      nicknameRef.off()
    };
  }, [__getNicknames]);
  // 닉네임을 실시간으로 불러온느 함수를 만들기

  useEffect(() => {
    Fauth.onAuthStateChanged(users => {
      if (users) {
        const { uid, displayName, email } = users
        dispatch({
          type: __UPDATE_HEADER_STATE__,
          payload: true
        });
        dispatch({
          type: __UPDATE_SESSION__,
          payload: {
            uid,
            displayName,
            email
          }
        });
      } else {
        dispatch({
          type: __UPDATE_SESSION__,
          payload: undefined
        });
      }
    })
  }, [dispatch])

  // 함수를 실행시키기
  return (
    <Router>
      {isHeaderOpen && <Header />}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Route path="/feed" exact component={MainFeed} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      {false && <Detail />}
    </Router>
  );
}

export default App;
