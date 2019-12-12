import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';


class RecentlyViewedList extends React.Component {
  constructor() {
    super()
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
        <h3 id="HTrec_products_h3">Recently Viewed</h3>
        <div id="HTrecommended_products_list">
          {this.state.products.map((product, i) => {
            return <Product product={product} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default RecentlyViewedList;