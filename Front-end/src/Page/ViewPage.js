import React, { Component } from "react";
import "./ViewPage.css";
import $ from "jquery";
window.$ = window.jQuery = $;
class ViewPage extends Component {
  componentDidMount = () => {
    $(document).ready(function () {
      //모든 서브 메뉴 감추기
      $(".sub").css({ display: "none" });
      $(".title").click(function () {
        //일단 서브메뉴 다 가립니다.
        //$(".sub").css({display:"none"});
        //열린 서브메뉴에 대해서만 가립니다.
        $(".sub").each(function () {
          console.log($(this).css("display"));
          if ($(this).css("display") == "block") {
            //$(".sub").css({display:"none"});
            //$(this).hide();
            $(this).slideUp("fast");
          }
        });
        //현재 요소의 다음 요소를 보이게 합니다.
        //$(this).next("ul").css({display:"block"});
        //$(this).next("ul").show();
        $(this).next("ul").slideDown("fast");
      });
    });
  };
  render() {
    return (
      <div>
        {/*윗부분*/}
        <div class="top_viewpage">
          <div class="logo_viewpage">
            <h1 id="logo_homepage_1">WORD </h1>
            <h1 id="logo_homepage_2">BALLOON</h1>
          </div>
          <div class="search_viewpage">
            <input
              id="search_bar_viewpage"
              type="text"
              placeholder="검색어 입력"
            ></input>
            <button id="search_btn_viewpage">검색</button>
          </div>
          <div class="click_viewpage">
            <u id="mypage_viewpage">MyPage</u>
            <u id="logout_viewpage">로그아웃</u>
          </div>
        </div>
        {/*메뉴*/}
        <div class="bottom_viewpage">
          <body class="menu">
            <ul id="navi">
              <li class="group">
                <div class="title">HOME</div>
              </li>
              <li class="group">
                <div class="title">내 동영상</div>
                <ul class="sub">
                  <li>
                    <a href="#">최근 본 영상</a>
                  </li>
                  <li>
                    <a href="#">좋아요 한 영상</a>
                  </li>
                  <li>
                    <a href="#">맞춤 영상</a>
                  </li>
                </ul>
              </li>
              <li class="group">
                <div class="title">카테고리</div>
                <ul class="sub">
                  <li>
                    <a href="#">한국 뉴스</a>
                  </li>
                  <li>
                    <a href="#">외국 뉴스</a>
                  </li>
                  <li>
                    <a href="#">한국 예능</a>
                  </li>
                  <li>
                    <a href="#">외국 예능</a>
                  </li>
                </ul>
              </li>
            </ul>
          </body>
          <div class="video">
            <iframe
              width="800"
              height="500"
              src="https://wordballoon2.s3.amazonaws.com/KakaoTalk_Video_20200510_1450_47_908.mp4"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewPage;
