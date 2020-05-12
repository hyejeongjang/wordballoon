import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

/*import LoginPage from "./LoginPage";*/

class HomePage extends Component {
  render() {
    return (
      <div>
        {/* 로고 */}
        <div class="top_homepage">
          <h1 id="logo_homepage">WORD BALLOON</h1>
        </div>

        {/*아래부분*/}
        <div class="container">
          {/*왼쪽 창*/}
          <div class="column_left">
            {/*검색바*/}
            <div class="search">
              <input
                id="search_bar"
                type="text"
                placeholder="검색어 입력"
              ></input>
              <Link to="/List" id="search_btn">
                검색
              </Link>
            </div>

            {/*조회수 TOP*/}
            <div class="top_video">
              <p id="top_video_text">조회수 TOP</p>
              <Link to="/View" id="View">
                동영상 링크
              </Link>
            </div>
          </div>

          {/* 오른쪽 창 */}
          <div class="column_right">
            {/*로그인*/}
            <div class="login">
              <Link to="/Login" id="login_btn">
                wordballoon 로그인
              </Link>
              <p id="login_q">
                회원이 아니신가요?
                <Link to="/Join" id="login_join">
                  회원가입
                </Link>
              </p>
            </div>

            {/*카테고리 버튼*/}
            <div class="category">
              <div>
                <button id="btn_news_eng">외국 뉴스</button>
                <button id="btn_news_kor">한국 뉴스</button>
              </div>
              <div>
                <button id="btn_enter_eng">외국 예능</button>
                <button id="btn_enter_kor">한국 예능</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
