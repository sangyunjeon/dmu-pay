// src/components/MerchantHeader.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MerchantHeader.css";

function MerchantHeader({ storeName, owner, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* 좌측 로고 영역 */}
      <div className="header-left" onClick={() => navigate("/merchant")}>
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span className="logo-text">DMU-Pay</span>
      </div>

      {/* 중앙 가맹점 정보 */}
      <div className="header-center">
        {storeName} {owner}
      </div>

      {/* 우측 버튼 */}
      <nav className="header-nav">
        <button onClick={() => navigate("/merchant/settlement")}>정산관리</button>
        <button onClick={onLogout}>로그아웃</button>
      </nav>
    </header>
  );
}

export default MerchantHeader;
