import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        {/*로고*/}
        <div class="top_loginpage">
          <h1 id="logo_loginpage">WORD BALLOON</h1>
        </div>

        {/*로그인 */}
        <div class="Login">
          <div>
            <input id="ID" type="text" placeholder="ID"></input>
          </div>
          <div>
            <input id="PW" type="text" placeholder="PASSWORD"></input>
          </div>
          <div>
            <button id="Login_btn">WORDBALLON 로그인</button>
          </div>
        </div>

        {/*회원가입*/}
        <div class="join">
          <Link to="/Join" id="join_us">
            회원가입하기
          </Link>
        </div>
      </div>
    );
  }
}
export default LoginPage;
