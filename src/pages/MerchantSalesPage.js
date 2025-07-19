// src/pages/MerchantSalesPage.js
import React, { useState, useEffect } from "react";
import MerchantHeader from "../components/MerchantHeader";
import "./MerchantSalesPage.css";

function MerchantSalesPage() {
  const [activeTab, setActiveTab] = useState("today");
  const [salesData, setSalesData] = useState(null);

  // 날짜 범위 계산
  const getDateRange = (tab) => {
    const today = new Date();
    if (tab === "today") {
      return { start: today, end: today };
    } else if (tab === "week") {
      const day = today.getDay(); // 0(일)~6(토)
      const start = new Date(today);
      start.setDate(today.getDate() - ((day + 6) % 7)); // 월요일
      const end = new Date(start);
      end.setDate(start.getDate() + 6); // 일요일
      return { start, end };
    } else if (tab === "month") {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return { start, end };
    }
  };

  // 매출 데이터 불러오기 (모의)
  const fetchSalesData = (range) => {
    console.log("요청 날짜 범위:", range);
    // 실제 fetch 로직에 range.start, range.end 넘겨서 요청하면 됨
    // 아래는 임시 데이터
    const mockData = {
      settlement: "3,200,000",
      sales: "1,000,000",
      returns: "-5,000",
      orders: 50,
      average: "9,000",
    };
    setSalesData(mockData);
  };

  useEffect(() => {
    const range = getDateRange(activeTab);
    fetchSalesData(range);
  }, [activeTab]);

  return (
    <div className="merchant-page">
      <MerchantHeader />

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
