import React from "react";
import Header from "../components/Header";
import "./StudentMyPage.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "3월", 지급: 2000, 사용: -1000 },
  { month: "4월", 지급: 4000, 사용: -3000 },
  { month: "5월", 지급: 3500, 사용: -1500 },
  { month: "6월", 지급: 4000, 사용: -1000 },
  { month: "7월", 지급: 3000, 사용: -1500 },
  { month: "8월", 지급: 6000, 사용: -2000 },
  { month: "9월", 지급: 2000, 사용: -2500 },
  { month: "10월", 지급: 3000, 사용: -1000 },
  { month: "11월", 지급: 3200, 사용: -500 },
  { month: "12월", 지급: 4000, 사용: -1000 },
];

function StudentMyPage() {
  return (
    <>
      <Header />
      <div className="mypage-container">
        <h2>마이페이지</h2>

        <div className="user-card">
          <div className="user-left">
            <img
              src="https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp"
              alt="프로필"
              className="profile-img"
            />

            <div className="user-info">
              <div>동양미래대학교</div>
              <div className="user-name">박수민</div>
            </div>
          </div>
          <div className="user-right">
            <div>재학생</div>
            <div>sumin14457641@gmail.com</div>
            <div className="point">5,000P</div>
          </div>
        </div>

        <div className="chart-section">
          <h4>지급/사용</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="지급"
                stroke="#055db4"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="사용"
                stroke="#ff4d4d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default StudentMyPage;
