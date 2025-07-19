// src/pages/MerchantSalesPage.js
import React, { useState, useEffect } from "react";
import MerchantHeader from "../components/MerchantHeader";
import "./MerchantSalesPage.css";
import { useNavigate } from "react-router-dom";

function MerchantSalesPage() {
  const [activeTab, setActiveTab] = useState("today");
  const [salesData, setSalesData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  // 날짜 범위 계산 ... (생략)
  // fetchSalesData ... (생략)

  useEffect(() => {
    const range = getDateRange(activeTab);
    fetchSalesData(range);
  }, [activeTab]);

  return (
    <div className="merchant-page">
      {/* ✅ onLogout 추가 */}
      <MerchantHeader
        storeName="가게 이름"
        owner="000 사장님"
        onLogout={handleLogout}
      />

      {/* 탭 영역 */}
      <div className="sales-tabs">
        <button
          className={activeTab === "today" ? "active" : ""}
          onClick={() => setActiveTab("today")}
        >
          오늘
        </button>
        <button
          className={activeTab === "week" ? "active" : ""}
          onClick={() => setActiveTab("week")}
        >
          이번주
        </button>
        <button
          className={activeTab === "month" ? "active" : ""}
          onClick={() => setActiveTab("month")}
        >
          이번달
        </button>
      </div>

      {/* 정산 요약 */}
      <div className="settlement-summary">
        <strong>
          이번 달 정산금액:{" "}
          <span>{salesData ? `${salesData.settlement}원` : "로딩중..."}</span>
        </strong>
      </div>

      {/* 매출 요약 박스 */}
      <div className="sales-summary-box">
        <div className="sales-left">
          <p>매출</p>
          <h2>{salesData ? `${salesData.sales}원` : "-"}</h2>
          <p>반품</p>
          <h2 className="negative">
            {salesData ? `${salesData.returns}원` : "-"}
          </h2>
        </div>
        <div className="sales-right">
          <p>주문건</p>
          <h2>{salesData ? `${salesData.orders}건` : "-"}</h2>
          <p>평균결제금액</p>
          <h2>{salesData ? `${salesData.average}원` : "-"}</h2>
        </div>
      </div>
    </div>
  );
}

export default MerchantSalesPage;
