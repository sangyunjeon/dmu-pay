// src/pages/AdminMerchantPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 추가
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar"; 
import "./AdminMainPage.css"; // 공통 스타일
import "./AdminMerchantPage.css"; // 가맹점 전용 스타일

function AdminMerchantPage() {
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate(); // 추가

  // 더미 가맹점 데이터
  const merchants = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `가맹점 ${i + 1}`,
    code: `MCH${1000 + i}`,
    phone: "010-1234-5678",
    date: "2025-06-01",
    status: i % 3 === 0 ? "정산완료" : i % 3 === 1 ? "정산대기" : "정산오류",
  }));

  const getStatusClass = (status) => {
    switch (status) {
      case "정산완료":
        return "status-complete";
      case "정산대기":
        return "status-pending";
      case "정산오류":
        return "status-error";
      default:
        return "";
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    window.location.href = "https://dmu-pay.netlify.app/";
  };

  return (
    <div className="admin-page">
      <AdminHeader handleLogout={handleLogout} />

      <div className="main-body">
        <AdminSidebar handleLogout={handleLogout} />

        <div className="main-content">
          {/* 검색 영역 */}
          <div className="card" style={{ marginBottom: "30px" }}>
            <h3>검색</h3>
            <div className="merchant-search-bar" style={{ display: "flex", alignItems: "center", gap: "10px" }}>

              <input
                type="text"
                placeholder="상호명을 입력해주세요"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                style={{ padding: "10px", width: "300px" }}
              />
              <button style={{ padding: "10px 20px" }}>검색</button>
              <button
                style={{ marginLeft: "auto", padding: "10px 20px" }}
                onClick={() => navigate("/admin/merchant/register")}
              >
                가맹점 등록
              </button>
            </div>
          </div>

          {/* 테이블 영역 */}
          <div className="card admin-merchant-table-wrapper">
            <table className="admin-merchant-table">
              <thead>
                <tr>
                  <th>상호명</th>
                  <th>가맹점코드</th>
                  <th>전화번호</th>
                  <th>등록일</th>
                  <th>정산상태</th>
                  <th>가맹점 정보/정산</th>
                  <th>가맹점정보수정</th>
                </tr>
              </thead>
              <tbody>
                {merchants.map((m) => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.code}</td>
                    <td>{m.phone}</td>
                    <td>{m.date}</td>
                    <td className={getStatusClass(m.status)}>{m.status}</td>
                    <td><button>보기</button></td>
                    <td><button>수정</button></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 페이징 영역 */}
            <div className="pagination" style={{ marginTop: "20px" }}>
              <button>&laquo;</button>
              <button>&lt;</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>&gt;</button>
              <button>&raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMerchantPage;
