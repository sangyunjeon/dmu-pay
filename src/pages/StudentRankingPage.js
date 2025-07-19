import React from 'react';
import Header from '../components/Header';
import './StudentRankingPage.css';

const rankingData = [
  { rank: 1, name: '박수민', point: 15000 },
  { rank: 2, name: '전상윤', point: 14999 },
  { rank: 3, name: '서동현', point: 14998 },
  { rank: 4, name: '신민재', point: 14997 },
  { rank: 5, name: '000', point: 14996 },
  { rank: 6, name: '000', point: 14995 },
  { rank: 7, name: '000', point: 14994 },
  { rank: 8, name: '000', point: 14993 },
  { rank: 9, name: '000', point: 14992 },
  { rank: 10, name: '000', point: 14991 },
];

function StudentRankingPage() {
  const myRank = 27;
  const totalStudents = 500;

  return (
    <>
      <Header />
      <div className="ranking-page">
        <div className="ranking-title">포인트 랭킹</div>
        <div className="my-rank">
          <span className="rank-number">{myRank}위</span>
          <span className="rank-total"> / {totalStudents}명</span>
        </div>

        <table className="ranking-table">
          <thead>
            <tr>
              <th>순위</th>
              <th>이름</th>
              <th>포인트</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.map((user) => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.point.toLocaleString()}P</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentRankingPage;
