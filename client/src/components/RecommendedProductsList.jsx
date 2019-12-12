import React from 'react';
import Product from './Product.jsx';
import axios from 'axios';


class RecommendedProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    axios.get('/hunter_all_products')
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
      <div id="HTtheme">
      <div>
        <h3 id="HTrec_products_h3">YOU MAY ALSO LIKE</h3>
        <div id="HTrecommended_products_list">
        {this.state.products.map((product, i) => {
        return <Product product={product} key={i} />
        })}</div>
      </div>
      </div>
    )
  }
}

export default RecommendedProductsList;