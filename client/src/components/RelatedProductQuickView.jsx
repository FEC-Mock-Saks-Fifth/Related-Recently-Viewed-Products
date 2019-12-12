import React from 'react';

const RelatedProductQuickView = ({product, onClick}) => (
  <div className="HTtool_tip" onClick={onClick}>
    <img className="HTquickview_img" src={product.product_image} />
    <div className="HTtool_tip_text">
    <p className="HTrelated_product_description">{product.product_description}</p>
    <p className="HTquickview_default">Description:</p>
    <p className="HTquickview_default">{product.product_long_description}</p>
    <a className="HTquickview" href="">View Product</a>
    </div>
  </div>
)

export default RelatedProductQuickView;