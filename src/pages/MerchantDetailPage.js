// src/pages/MerchantDetailPage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import './MerchantDetailPage.css';

function MerchantDetailPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  // 더미 요약 데이터
  const summary = {
    point: 950000,
    orders: 50,
    totalAmount: 950000,
  };

  // 더미 정산 내역
  const settlementHistory = [
    { date: '2025.05.01', point: 3000000, status: '정산완료', processedDate: '2025.05.03', note: '' },
    { date: '2025.04.01', point: 3000000, status: '정산완료', processedDate: '', note: '' },
    { date: '2025.03.01', point: 3000000, status: '정산완료', processedDate: '', note: '' },
    { date: '2025.02.01', point: 3000000, status: '정산완료', processedDate: '', note: '' },
    { date: '2025.01.01', point: 3000000, status: '정산오류', processedDate: '', note: '' },
  ];

  const getStatusClass = (status) => {
    if (status === '정산완료') return 'status-complete';
    if (status === '정산오류') return 'status-error';
    return '';
  };

  const handleLogout = () => {
    sessionStorage.clear();
    alert('로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    <div className="merchant-detail-page">
      <AdminHeader handleLogout={handleLogout} />
      <div className="main-body">
        <AdminSidebar />

        <div className="main-content">
          <h2>가맹점 정보/정산</h2>
          <div className="breadcrumb">HOME &gt; 가맹점 관리 &gt; 가맹점 정보/정산</div>

          <div className="summary-box">
            <div>
              <div>누적 포인트</div>
              <div className="summary-value">{summary.point.toLocaleString()}P</div>
            </div>
            <div>
              <div>주문건</div>
              <div className="summary-value">{summary.orders}건</div>
            </div>
            <div>
              <div>정산금액</div>
              <div className="summary-value">{summary.totalAmount.toLocaleString()}원</div>
            </div>
          </div>

          <div className="settle-btn-wrapper">
            <button className="settle-btn">정산</button>
          </div>

          <h3 className="section-title">■ 가맹점 정산 내역</h3>

          <table className="settlement-table">
            <thead>
              <tr>
                <th>정산일</th>
                <th>정산포인트</th>
                <th>정산상태</th>
                <th>정산처리일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {settlementHistory.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>{item.point.toLocaleString()}P</td>
                  <td className={getStatusClass(item.status)}>{item.status}</td>
                  <td>{item.processedDate}</td>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button>{'«'}</button>
            <button>{'<'}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>{'>'}</button>
            <button>{'»'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantDetailPage;
