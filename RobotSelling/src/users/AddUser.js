import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/");
    };



    return (
        <div className='container size_mian'>
            <h2 className="text-center m-4">회원가입</h2>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label hemlFor="Name" className='form-label'>
                        아이디
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="ID를 입력해주세요"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label hemlFor="Name" className='form-label'>
                        비밀번호
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="비밀번호를 입력해주세요"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label hemlFor="Name" className='form-label'>
                        비밀번호 재확인
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label hemlFor="Username" className='form-label'>
                        닉네임
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="닉네임을 입력해주세요"
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>


                <div className='mb-3'>
                    <label hemlFor="Email" className='form-label'>
                        이메일
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="이메일을 입력해주세요"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='my-5  justify-content-md-end'>
                    <button type="submit" className='btn btn-outline-primary'>
                        제출</button>

                    <Link className='btn btn-outline-danger mx-2' to='/'>
                        취소</Link>
                    <div className='login_1'>
                        <Link className='login_1' to='/login'>
                            로그인</Link>
                    </div>

                </div>
            </form>

        </div>


    )
}
