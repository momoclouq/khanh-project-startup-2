import React from "react";
import { price } from "../../dummydata";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  .outline-btn {
    width: 180.591px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 33px;
    border-color: transparent;
    background: #0c4ca3;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const PriceCard = () => {
  return (
    <CardStyled>
      {price.map((val) => (
        <div className="items shadow">
          {val.discount ? (
            <h2 className="wrapper">
              <span className="discount">{val.discount} Discount</span>
            </h2>
          ) : (
            <h2>
              <span className="no-discount">""</span>
            </h2>
          )}

          <h1>
            <span>$</span>
            {val.price}
          </h1>

          <h3>
            {val.hour > 1 ? (
              <span>{val.hour} Hours</span>
            ) : (
              <span>{val.hour} Hour</span>
            )}
          </h3>
          <p>{val.desc}</p>
          <button className="outline-btn"> Buy now</button>
        </div>
      ))}
    </CardStyled>
  );
};

export default PriceCard;
