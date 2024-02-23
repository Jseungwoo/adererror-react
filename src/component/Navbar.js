import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const menuList = ['전체보기', '점퍼 & 재킷', '코트 & 블레이저', '스웨트셔츠 & 후트', '니트 & 카디건', '티셔츠 & 셔츠', '팬츠', '스커트', '데님'];
    const goToLogin = () => {
      navigate('/Login');
    }
    return (
    <>
      <div className="Navbar">
        <div className="menu-bar">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img className="logo" src="https://m.adererror.com/images/logo.svg" alt="logo"/>
        <div className="user-icon"
        onClick={goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className='space'/>
      <div className='text'>
        컬렉션 &gt; 의류
      </div>
      <div className='space'/>
        <ul className='menu-list'>
            {menuList.map((menu)=>(
                <li>{menu}</li>
            ))}
        </ul>
      <div className='space'/>
    </>
    );
  };

export default Navbar
