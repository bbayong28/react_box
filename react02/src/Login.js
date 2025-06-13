import React from 'react'
import './index.css'
import './css/style.css'

function Login() {
    return (
        <div className="Login">

            {/* 텍스트 영역 */}
            <div className="txt_wrap">
                <p>이메일과 비밀번호를 입력해 주세요.</p>
            </div>



            {/* 폼영역 */}
            <div className="form_wrap">
                <form action="">
                    <div className="form_in">

                        <div className="ip_wrap">

                            <div className="ip_line">
                                <p>이메일</p>
                                <div className="ip_box">
                                    <input type="text" placeholder='test@gmail.com'/>
                                    <div className="erMsg_wrap">
                                        <p>올바른 이메일을 입력해주세요.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="ip_line">
                                <p>비밀번호</p>
                                <div className="ip_box">
                                    <input type="password" placeholder='영문, 숫자, 특수문자 포함 8자 이상' />
                                    <div className="erMsg_wrap">
                                        <p>영문, 숫자, 특수문자 포함 8자를 입력해주세요.</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="sbm_wrap">
                            <button type='submit'>확인</button>
                        </div>

                        

                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;
