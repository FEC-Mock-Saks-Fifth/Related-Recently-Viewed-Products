import React from 'react';
import axios from 'axios';
import RelatedProductQuickView from './RelatedProductQuickView.jsx';


class RelatedProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.showQuickView = this.showQuickView.bind(this);
  }

  showQuickView() {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show === false) {
      return(
        <div id="HTrelated_product_flex_item">
          <div id="HTquick_view_hover">
          <img className="HTrelated_product_img" src={this.props.product.product_image} />
          <p className="HTrelated_product_description">{this.props.product.product_description}</p>
          <p className="HTrelated_product_long_description">{this.props.product.product_long_description}</p>
          <p id="HTquickview" onClick={this.showQuickView}>QUICKVIEW</p>
          </div>
        </div>
      )
    } else if (this.state.show === true) {
      return(
        <div id="HTrelated_product_flex_item">
          <div id="HTrelated_product">
          <img className="HTrelated_product_img" src={this.props.product.product_image} />
          <p className="HTrelated_product_description">{this.props.product.product_description}</p>
          <p className="HTrelated_product_long_description">{this.props.product.product_long_description}</p>
          <RelatedProductQuickView product={this.props.product} onClick={this.showQuickView}/>
          <p id="HTquickview" onClick={this.showQuickView}>QUICKVIEW</p>
          </div>
        </div>
      )
    }
  }
}

export default RelatedProduct;