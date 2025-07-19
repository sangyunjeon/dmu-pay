// src/components/MerchantHeader.js
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MerchantHeader.css";

function MerchantHeader({ storeName = "가게 이름", owner = "000 사장님", onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false); // 메뉴 클릭 후 닫기
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="merchant-header">
      <div className="merchant-info">
        <span>{storeName}</span>
        <span>{owner}</span>
      </div>

      <div className="merchant-actions" ref={dropdownRef}>
        <div className="dropdown">
          <button onClick={toggleDropdown}>정산관리 ▾</button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleNavigate("/merchant/sales")}>📊 매출현황</li>
              <li onClick={() => handleNavigate("/merchant/calendar")}>📅 매출달력</li>
            </ul>
          )}
        </div>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default MerchantHeader;
