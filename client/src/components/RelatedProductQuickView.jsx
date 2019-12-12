import React from 'react';
// import styled from 'styled-components';

// const ToolTip = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   position: absolute;
//   border: 1px solid;
//   border-color: darkGrey;
//   background-color: white;
//   z-index: 1;
// `;

// const ToolTipText = styled.div`
//   text-align: left;
//   max-width: 300px;
//   margin: 15px;
// `;

// const Img = styled.img`
//   margin: 45px 15px 15px 15px;
//   width: 80px;
//   height: 80px;
//   float: left;
// `;

// const P1 = styled.p`
//   font-weight: 550;
//   font-size: 14px;
//   margin: 0px;
// `;

// const P3 = styled.p`
//   font-size: 12px;
// `;

// const A = styled.a`
//   font-weight: bold;
//   color: black;
// `;

const RelatedProductQuickView = ({product, onClick}) => (
  <div class="tool_tip" onClick={onClick}>
    <img class="quickview_img" src={product.product_image} />
    <div class="tool_tip_text">
    <p class="related_product_description">{product.product_description}</p>
    <p class="quickview_default">Description:</p>
    <p class="quickview_default">{product.product_long_description}</p>
    <a class="quickview" href="">View Product</a>
    </div>
  </div>
)

export default RelatedProductQuickView;