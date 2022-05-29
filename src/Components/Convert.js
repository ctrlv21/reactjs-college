import React from "react";
import { useState } from "react";
import cx from "classnames";
import styles from "./CenterBanner.module.css";

const Convert = () => {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const convertCtoF = (e) => {
    e.preventDefault();
    setFahrenheit((celcius * 9) / 5 + 32);
  };
  const [celcius2, setCelcius2] = useState(0);
  const [farenheit2, setFahrenheit2] = useState(0);
  const convertFtoC = (e) => {
    e.preventDefault();
    setCelcius2((farenheit2 - 32) * 0.5556);
  };
  return (
    <div className={cx("row", styles.paddingCard)}>
      <div class="col-sm-6">
        <div className={cx("card", styles.card)}>
          <div class="card-body">
          <h1 class="card-title">Celsius to Farenheit</h1>
            <form onSubmit={convertCtoF}>
              <div class="input-group mb-3">
                   <input
                type="number"
                className="Input"
                placeholder="Celsius value"
                value={celcius}
                onChange={(e) => setCelcius(e.target.value)}
              />
              <div className="button">
                <button type="submit">Convert</button>
              </div>
              </div>
            </form>
            <div>
            <p>Result : {fahrenheit}°C</p>
          </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
      <div className={cx("card", styles.card)}>
          <div class="card-body">
          <h1 class="card-title">Farenheit to Celsius</h1>
          <form onSubmit={convertFtoC}>
              <div class="input-group mb-3">
                   <input
                type="number"
                className="Input"
                placeholder="Farenheit value"
                value={farenheit2}
                onChange={(e) => setFahrenheit2(e.target.value)}
              />
              <div className="button">
                <button type="submit">Convert</button>
              </div>
              </div>
            </form>
            
            <div>
            <p>Result : {celcius2}°C</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
