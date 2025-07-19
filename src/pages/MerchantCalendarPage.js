// src/pages/MerchantCalendarPage.js

import React from "react";
import MerchantHeader from "../components/MerchantHeader"; // 헤더 컴포넌트 import

function MerchantCalendarPage() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <MerchantHeader
        storeName="가게 이름"
        owner="000 사장님"
        onLogout={handleLogout}
      />
      <h1>📅 매출달력 페이지</h1>
    </div>
  );
}

export default MerchantCalendarPage;
