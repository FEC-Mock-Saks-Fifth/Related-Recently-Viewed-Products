import React from 'react';
// import styled from 'styled-components';

// const FlexItem = styled.div`
//   padding: 10px;
//   max-width: 140px;
//   min-width: 120px;
//   font-size: 12px;
//   &:hover {
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// `

// const Img = styled.img`
//   margin: 5px 10px 60px 10px;
//   width: 135px;
// `

// const P1 = styled.p`
//   font-weight: 550;
//   font-size: 14px;
//   margin: 0px;
// `

// const P3 = styled.p`
//   font-size: 12px;
//   margin: 5px;
// `

// const P2 = styled.p`
//   font-weight: bold;
//   font-size: 12px;
//   margin: 0px;
// `

var Product = ({product}) => (
  <div id="product">
    <img className="product_image" src={product.product_image} />
    <p className="product_brand">{product.product_brand}</p>
    <p className="product_description">{product.product_description}</p>
    <p className="product_price">{`$${product.product_price}`}</p>
    <p className="product_rating_num">{`${product.product_rating_avg}  (${product.product_rating_num})`}</p>
  </div>
)

export default Product;