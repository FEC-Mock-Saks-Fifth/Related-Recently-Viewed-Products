import React from 'react';
import styled from 'styled-components';

const ToolTip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  border: 1px solid;
  border-color: darkGrey;
  background-color: white;
  z-index: 1;
  // max-width: 600px;
  // bottom: 100%;
  // left: 50%;
  // margin-left: -60px;
  &::after {
    content: " ";
  }
`;

const ToolTipText = styled.div`
  text-align: left;
  max-width: 300px;
  margin: 15px;
`;

const Img = styled.img`
  margin: 45px 15px 15px 15px;
  width: 80px;
  height: 80px;
  float: left;
`;

const P1 = styled.p`
  font-weight: 550;
  font-size: 14px;
  margin: 0px;
`;

const P3 = styled.p`
  font-size: 12px;
`;

const RelatedProductQuickView = ({product, onClick}) => (
  <ToolTip onClick={onClick}>
    <Img src={product.product_image} />
    <ToolTipText>
    <P1>{product.product_description}</P1>
    <P3>Description:</P3>
    <P3>{product.product_long_description}</P3>
    <a href="">View Product</a>
    </ToolTipText>
  </ToolTip>
)

export default RelatedProductQuickView;