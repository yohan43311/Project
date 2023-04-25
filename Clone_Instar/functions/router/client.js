const firebaseApp = require('../config/firebaseModule');
const express = require('express');
const cors = require('cors');

const Fauth = firebaseApp.auth();
const Fdatabase = firebaseApp.database();

const router = express.Router();
router.use(cors());
router.options('*', cors); // 기본 옵션

router.post('/user/new', (req, res, next) => {
  const {
    email,
    password,
    nickname
  } = req.body

  Fauth.createUser({
    email,
    password,
    displayName: nickname
  }).then((credential) => {
    const {
      uid
    } = credential;
    // 유저 프로필 데이터베이스를 만들어서 데이터베이스에 저장하기.

    Promise.all([
      Fdatabase.ref(`users/%{uid}/profile`).set({
        email,
        nickname,
        timestamp: Date.now()
      }),
      Fdatabase.ref(`statics/nicknames/${uid}`).set(nickname)
    ]).then(() => {
      res.status(200).json({
        msg: '유저가 만들어 졌습니다.'
      })
    }).catch(err => {
      res.status(400).json({
        err
      })
    })
    // promise 약속 (밑에 내용을 반드시 밑에 두개를 실행해야 한다는)

    // Fdatabase.ref(`users/${uid}/profile`).set({
    //   email,
    //   nickname,
    //   timestamp: Date.now()
    // }).catch(err => {
    //   res.status(400).json({
    //     err
    //   })
    // })
    // // key와 value의 이름이 같으면 단축 가능
    // // users/{uid}/profile/email,timestamp,nickname

    // Fdatabase.ref(`statics/nicknames/${uid}`).set(nickname)
    // // nickname 중복 확인 statics/nicknames에 저장

  }).catch((err) => {
    res.status(400).json({
      err
    })
  });

})

router.post('/feed/new', (req, res, next) => {
  const {
    feed,
    profile,
    timestamp
  } = req.body

  const {
    uid
  } = profile

  Fdatabase.ref('feed').push({
    feed,
    profile,
    timestamp
  }).then(snapshot => {
    const fid = snapshot.key // 무작위의 키가 만들어진 후에 그 키를 반환합니다.
    Fdatabase.ref(`users/${uid}/feed`).push({
      fid
    }).then(() => {
      res.status(200).json({
        msg: '피드가 올라갔습니다.'
      })
    }).catch(err => {
      res.status(400).json({
        err
      })
    })// 유저가 본인의 글을 가져올 때 사용

  }).catch(err => {
    res.status(400).json({
      err
    })
  })
})

router.get("/helloworld", (req, res, next) => {
  res.json({
    msg: "helloworld"
  });
});

// 서버 살아있는지 체크용도

module.exports = router;
