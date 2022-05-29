import React, { createContext } from 'react'
import cx from 'classnames';
import back from './back.jpeg';
import { useNavigate } from "react-router-dom";

import styles from "./CenterBanner.module.css";
const TempCalc = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
    navigate("/convert");
    };
  return (
    <div     className={cx("card bg-dark text-white", styles.paddingCard)}>
  <img src={back} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title">Temperature Calculator</h1>
    <p class="card-text">Convert Temperatures between Celsius and Fareheit.</p>
    <button type="button" class="btn btn-outline-primary" onClick={navigateTo}>Convert</button>
  </div>
</div>
  )
}

export default TempCalc