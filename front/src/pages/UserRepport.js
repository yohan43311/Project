import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function UserRepport() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onChangeUserId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserNameError(false);
    setUserName(e.target.value)
  };
  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const validation = () => {
    if (!userId) setUserIdError(true);
    if (!password) setPasswordError(true);
    if (!confirmPassword) setConfirmPasswordError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    if (userId && password && confirmPassword && userName && email) return true;
    else return false;
  }

  const onSubmit = (e) => {
    if (validation()) return;

    // API Call


  }
  return (
    <div>
      <Container className="panel size_mian">
        <h2 className="text-center m-4">문의사항</h2>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col sm>
                <Form.Control maxLength={20} placeholder="아이디" value={userId} onChange={onChangeUserId} />
                {userIdError && <div class="invalid-input">( 사용자 ID는 최소 5글자 / 문자나 숫자를 포함 )</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Control maxLength={20} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
              {passwordError && <div class="invalid-input">( 비밀번호는 8자 이상 / 적어도 하나의 문자 포함 ) </div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Control maxLength={20} type="password" placeholder="비밀번호 재입력" value={confirmPassword} onChange={onChangeConfirmPassword} />
              {confirmPasswordError && <div class="invalid-input">일치하지 않습니다.</div>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Control className='userre_id' maxLength={100} placeholder="문의사항" value={userName} onChange={onChangeUserName} />
              {userNameError && <div class="invalid-input">최대 100자</div>}
            </Col>
          </Form.Group>

          <br />
          <div className="d-grid gap-1">
            <Button variant="secondary" onClick={onSubmit}>
              제출하기
            </Button>

          </div>
        </Form>
      </Container>
    </div>
  )
}
