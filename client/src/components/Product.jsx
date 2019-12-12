import React from 'react';


var Product = ({product}) => (
  <div id="HTproduct">
    <img className="HTproduct_image" src={product.product_image} />
    <p className="HTproduct_brand">{product.product_brand}</p>
    <p className="HTproduct_description">{product.product_description}</p>
    <p className="HTproduct_price">{`$${product.product_price}`}</p>
    <p className="HTproduct_rating_num">{`${product.product_rating_avg}  (${product.product_rating_num})`}</p>
  </div>
)

export default Product;