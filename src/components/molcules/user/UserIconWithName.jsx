import React from "react";
import styled from "styled-components";

export const UserIconWithName = props => {
  const { image, name } = props;
  return (
    <Scontainer>
      <SSpan>
        <SImg height={160} width={160} src={image} alt={name} />
      </SSpan>
      <SName>{name}</SName>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;

const SSpan = styled.span`
  overflow: hidden;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    overflow: visible;
    z-index: 1000; /* 浮かせるレイヤーの数 */
    top: -5px; /* 縮小した画像を基点にずらす */
    left: -5px; /* 　　　　　　〃　　　　　　 */
  }
`;

const SImg = styled.img`
  border-radius: 50%;
  &:hover {
    background: #fff;
    transform: scale(1.5, 1.5);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
