import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);

      const response = await fetch("/.netlify/functions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params.toString(),
      });

      const data = await response.json();

      if (data.success) {
        alert("로그인 성공!");

        // 관리자/학생/가맹점 역할에 따라 세션 저장
        sessionStorage.setItem(data.role, "true");

        switch (data.role) {
          case "student":
            navigate("/student");
            break;
          case "merchant":
            navigate("/merchant");
            break;
          case "admin":
            navigate("/admin");
            break;
          default:
            alert("정의되지 않은 역할입니다.");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("에러:", error);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1 className="login-title">DMU-Pay</h1>
        <p className="subtitle">당신의 노력, 포인트로 돌려받자!</p>
        <p className="desc">
          DMU-Pay는 동양미래대 학생들의 노력을
          <br />
          포인트로 보상해주어 학생들의 자기개발을 독려하는 시스템입니다.
          <br />
          포인트는 제휴 가맹점에서 사용할 수 있습니다.
        </p>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="form-title">로그인</h2>

          <div className="input-box">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" type="submit">
            로그인
          </button>
          <button
            className="login-btn signup-btn"
            type="button"
            onClick={() => navigate("/signup")}
          >
            회원가입(학생)
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
