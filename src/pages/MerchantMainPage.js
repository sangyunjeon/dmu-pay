// src/pages/MerchantMainPage.js
import React from "react";
import MerchantHeader from "../components/MerchantHeader";
import "./MerchantMainPage.css";

function MerchantMainPage() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  const handleSettlement = () => {
    alert("정산관리 페이지로 이동");
    // 예: navigate("/merchant/settlement");
  };

  return (
    <div className="merchant-main-page">
      <MerchantHeader
        storeName="가게 이름"
        owner="000 사장님"
        onLogout={handleLogout}
        onSettlement={handleSettlement}
      />

      <table className="payment-table">
        <thead>
          <tr>
            <th>메뉴</th>
            <th>가격</th>
            <th>이름</th>
            <th>날짜</th>
            <th colSpan="2">결제</th>
          </tr>
        </thead>
        <tbody>
          {/* 예시 데이터 (추후 서버에서 받아오기) */}
          {Array.from({ length: 12 }).map((_, i) => (
            <tr key={i}>
              <td>우동</td>
              <td>7,000</td>
              <td>박수민</td>
              <td>2025.05.24</td>
              <td><button className="accept-btn">수락</button></td>
              <td><button className="reject-btn">거절</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MerchantMainPage;
