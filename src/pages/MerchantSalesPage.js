// src/pages/MerchantSalesPage.js

import React from "react";
import MerchantHeader from "../components/MerchantHeader"; // 헤더 import

function MerchantSalesPage() {
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
      <h1>📊 매출현황 페이지</h1>
    </div>
  );
}

export default MerchantSalesPage;
