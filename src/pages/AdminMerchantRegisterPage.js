import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './MerchantRegisterPage.css';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';

function AdminMerchantRegisterPage() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('가맹점 등록: ' + JSON.stringify(formData, null, 2));
    // TODO: fetch로 서버에 데이터 전송
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
          <h2>가맹점 신규등록</h2>
          <form onSubmit={handleSubmit} className="merchant-form">
            <fieldset>
              <legend>■ 가맹점 정보</legend>
              <table>
                <tbody>
                  <tr>
                    <th>상호명</th>
                    <td><input name="name" value={formData.name} onChange={handleChange} /></td>
                    <th>가맹점 코드</th>
                    <td><input name="code" value={formData.code} onChange={handleChange} /></td>
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
                    <td colSpan="3"><input name="note" value={formData.note} onChange={handleChange} style={{ width: '100%' }} /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-wrapper">
                <button type="submit">등록</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminMerchantRegisterPage;
