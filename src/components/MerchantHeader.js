// src/components/MerchantHeader.js
import React from "react";
import "./MerchantHeader.css";

function MerchantHeader({ storeName = "가게 이름", owner = "000 사장님", onLogout, onSettlement }) {
  return (
    <div className="merchant-header">
      <div className="merchant-info">
        <span>{storeName}</span>
        <span>{owner}</span>
      </div>
      <div className="merchant-actions">
        <button onClick={onSettlement}>정산관리</button>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default MerchantHeader;
