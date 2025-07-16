// src/pages/MerchantEditPage.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MerchantRegisterPage.css'; // 기존 스타일 재사용
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';

function MerchantEditPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    phone: '',
    address: '',
    accountHolder: '',
    bankName: '',
    accountNumber: '',
    businessNumber: '',
    note: '',
  });

  // 가맹점 정보 불러오기 (추후 서버 fetch로 교체 가능)
  useEffect(() => {
    // 예: 더미 데이터로 초기화 (실제는 fetch로 대체 예정)
    const dummyMerchant = {
      name: '가맹점 3',
      code: code,
      phone: '010-1234-5678',
      address: '서울시 강남구',
      accountHolder: '홍길동',
      bankName: '국민은행',
      accountNumber: '123-456-789',
      businessNumber: '123-45-67890',
      note: '비고 예시',
    };
    setFormData(dummyMerchant);
  }, [code]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('수정 완료: ' + JSON.stringify(formData, null, 2));
    // TODO: fetch로 서버에 PUT 요청
    navigate('/admin/merchant');
  };

  const handleLogout = () => {
    sessionStorage.clear();
    alert('로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    <div className="merchant-register-container">
      <AdminHeader handleLogout={handleLogout} />
      <div className="merchant-register-body">
        <AdminSidebar />
        <div className="merchant-register-content">
          <h2>가맹점 정보 수정</h2>
          <form onSubmit={handleSubmit} className="merchant-form">
            <fieldset>
              <legend>■ 가맹점 정보</legend>
              {/* form 내용은 RegisterPage와 동일 */}
              {/* ... 생략 ... */}
              <table>
                <tbody>
                  <tr>
                    <th>상호명</th>
                    <td><input name="name" value={formData.name} onChange={handleChange} /></td>
                    <th>가맹점 코드</th>
                    <td><input name="code" value={formData.code} readOnly /></td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td><input name="phone" value={formData.phone} onChange={handleChange} /></td>
                    <th>주소</th>
                    <td><input name="address" value={formData.address} onChange={handleChange} /></td>
                  </tr>
                  <tr className="section-divider">
                    <td colSpan="4">정산 계좌정보</td>
                  </tr>
                  <tr>
                    <th>예금주</th>
                    <td><input name="accountHolder" value={formData.accountHolder} onChange={handleChange} /></td>
                    <th>은행명</th>
                    <td><input name="bankName" value={formData.bankName} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <th>계좌번호</th>
                    <td><input name="accountNumber" value={formData.accountNumber} onChange={handleChange} /></td>
                    <th>사업자번호</th>
                    <td><input name="businessNumber" value={formData.businessNumber} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <th>비고</th>
                    <td colSpan="3"><input name="note" value={formData.note} onChange={handleChange} /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-wrapper">
                <button type="submit">수정 완료</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MerchantEditPage;
