import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const data = await response.json();

      if (data.success) {
        alert("로그인 성공! 역할: " + data.role);
        // 예: 페이지 이동 등
        // window.location.href = "/student_main";
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("서버 통신 중 오류가 발생했습니다.");
      console.error("프론트엔드 오류:", err);
    }
  };

  return (
    <div className="login-container">
      <h1 className="app-title">DMU - Pay</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
}

export default LoginPage;
