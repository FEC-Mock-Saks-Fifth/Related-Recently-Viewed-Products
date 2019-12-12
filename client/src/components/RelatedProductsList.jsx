import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
// import styled from 'styled-components';

// const RelatedProducts = styled.div`
//   font-family: Source Sans Pro, sans-serif;
//   text-align: center;
//   border-style: solid;
//   border-width: 1px 0px 0px 0px;
//   border-color: LightGrey;
//   margin: auto;
//   max-width: 1050px;
// `

// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
// `

// const H3 = styled.h3`
//   font-weight: 340;
// `

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
    axios.get('/api/related_products')
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
      <div id="related_products_list">
        <h3 id="rec_products_h3">Related Products</h3>
        <div id="recommended_products_list">{this.state.products.map((product, i) => {
        return <RelatedProduct product={product} key={i} />
        })}</div>
      </div>
    )
  }
}

export default RelatedProductsList;