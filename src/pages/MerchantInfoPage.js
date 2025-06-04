import React, { useState } from 'react';
import Header from '../components/Header';
import './MerchantInfoPage.css';

const sampleMerchants = [
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
  { name: '역전우동', category: '음식점', address: '동양미래대학교' },
];

function MerchantInfoPage() {
  const [searchText, setSearchText] = useState('');

  const filtered = sampleMerchants.filter((m) =>
    m.name.includes(searchText)
  );

  return (
    <>
      <Header />
      <div className="merchant-page">
        <div className="merchant-title">가맹점 안내</div>

        <div className="merchant-filter">
          <select>
            <option>업종</option>
          </select>
          <input
            type="text"
            placeholder="가게 이름을 입력하세요"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button>검색</button>
        </div>

        <table className="merchant-table">
          <thead>
            <tr>
              <th>매장명</th>
              <th>업종</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, idx) => (
              <tr key={idx}>
                <td>{m.name}</td>
                <td>{m.category}</td>
                <td>{m.address}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button>&laquo;</button>
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&gt;</button>
          <button>&raquo;</button>
        </div>
      </div>
    </>
  );
}

export default MerchantInfoPage;
