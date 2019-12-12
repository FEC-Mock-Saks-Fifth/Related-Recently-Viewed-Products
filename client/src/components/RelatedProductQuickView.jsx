import React from 'react';

const RelatedProductQuickView = ({product, onClick}) => (
  <div class="HTtool_tip" onClick={onClick}>
    <img class="HTquickview_img" src={product.product_image} />
    <div class="HTtool_tip_text">
    <p class="HTrelated_product_description">{product.product_description}</p>
    <p class="HTquickview_default">Description:</p>
    <p class="HTquickview_default">{product.product_long_description}</p>
    <a class="HTquickview" href="">View Product</a>
    </div>
  </div>
)

export default RelatedProductQuickView;