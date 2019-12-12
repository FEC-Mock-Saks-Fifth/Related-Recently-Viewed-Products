import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';


class RelatedProductsList extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
    // this.getAll = this.getAll.bind(this);
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  /*
  getAll() {
    axios.get('/api/all_products')
      .then((results) => {
        this.setState({products: results.data})
      })
      .catch((err) => {
        console.error(err);
      })
  }
  */

  getRelatedProducts() {
    axios.get('/hunter_related_products')
      .then((results) => {
        this.setState({products: results.data})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  render() {
    return (
      <div id="HTrelated_products_list">
        <h3 id="HTrec_products_h3">Related Products</h3>
        <div id="HTrecommended_products_list">{this.state.products.map((product, i) => {
        return <RelatedProduct product={product} key={i} />
        })}</div>
      </div>
    )
  }
}

export default RelatedProductsList;