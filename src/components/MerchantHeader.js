// src/components/MerchantHeader.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MerchantHeader.css";

function MerchantHeader({ storeName, owner, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="merchant-header">
      <div className="header-left" onClick={() => navigate("/merchant")}>
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span className="logo-text">DMU-Pay</span>
      </div>

      <div className="header-center">
        {storeName} {owner}
      </div>

      <div className="header-right">
        <button onClick={() => navigate("/merchant/settlement")}>
          정산관리
        </button>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </header>
  );
}

export default MerchantHeader;
