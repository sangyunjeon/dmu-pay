import React from 'react';
import Header from '../components/Header';
import './PointHistoryPage.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// 더미 데이터 (나중에 서버에서 받아올 수 있음)
const data = [
  { date: '05.20', 지급: 1500, 사용: 0 },
  { date: '05.21', 지급: 0, 사용: 1500 },
  { date: '05.22', 지급: 1000, 사용: 500 },
  { date: '05.23', 지급: 0, 사용: 0 },
  { date: '05.24', 지급: 2000, 사용: 1000 },
];

function PointHistoryPage() {
  return (
    <>
      <Header />
      <div className="point-history-page">
        <div className="top-section">
          <div className="point-box">
            <h2>현재 포인트</h2>
            <p className="current-point">5,000P</p>
          </div>

          <div className="chart-box">
            <h4>지급/사용 추이</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="지급" stroke="#055db4" strokeWidth={2} />
                <Line type="monotone" dataKey="사용" stroke="#ff4d4d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="filter-section">
          <button className="filter-btn active">최신순</button>
          <label>
            <input type="radio" name="type" defaultChecked /> 사용
          </label>
          <label>
            <input type="radio" name="type" /> 지급
          </label>
        </div>

        <table className="history-table">
          <thead>
            <tr>
              <th>일시</th>
              <th>구분</th>
              <th>내역</th>
              <th>포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025.05.21</td>
              <td>사용</td>
              <td>가맹점</td>
              <td className="minus">-1,500P</td>
            </tr>
            <tr>
              <td>2025.05.20</td>
              <td>지급</td>
              <td>관리자</td>
              <td className="plus">+1,500P</td>
            </tr>
            <tr>
              <td>2025.05.19</td>
              <td>사용</td>
              <td>가맹점</td>
              <td className="minus">-1,500P</td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <button>&laquo;</button>
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
          <button>&raquo;</button>
        </div>
      </div>
    </>
  );
}

export default PointHistoryPage;
