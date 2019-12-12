import React from 'react';
import Product from './Product.jsx';
import axios from 'axios';
// import styled from 'styled-components';

// const ThemeProvider = styled.div`
//   font-family: Source Sans Pro, sans-serif;
//   text-align: center;
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

class RecommendedProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    axios.get('/api/all_products')
      .then((results) => {
        this.setState({products: results.data})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    return(
      <div id="theme">
      <div>
        <h3 id="rec_products_h3">YOU MAY ALSO LIKE</h3>
        <div id="recommended_products_list">
        {this.state.products.map((product, i) => {
        return <Product product={product} key={i} />
        })}</div>
      </div>
      </div>
    )
  }
}

export default RecommendedProductsList;