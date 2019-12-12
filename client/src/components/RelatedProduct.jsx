import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import RelatedProductQuickView from './RelatedProductQuickView.jsx';

// const FlexItem = styled.div`
//   padding: 10px;
//   max-width: 325px;
//   min-width: 120px;
//   font-size: 12px;
// `;

// const Img = styled.img`
//   margin: 0px 10px;
//   width: 80px;
//   float: left;
// `;

// const P1 = styled.p`
//   font-weight: 550;
//   font-size: 14px;
//   margin: 0px;
// `;

// const P3 = styled.p`
//   font-size: 12px;
//   margin: 5px;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

// const P4 = styled.a`
//   display: none;
// `;

// const QuickViewHover = styled.div`
//   &:hover {
//     ${P4} {
//       display: flex;
//       cursor: pointer;
//       font-weight: bold;
//       text-decoration: underline;
//     }
//   }
// `;

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
        <div id="related_product_flex_item">
          <div id="quick_view_hover">
          <img class="related_product_img" src={this.props.product.product_image} />
          <p class="related_product_description">{this.props.product.product_description}</p>
          <p className="related_product_long_description">{this.props.product.product_long_description}</p>
          <p id="quickview" onClick={this.showQuickView}>QUICKVIEW</p>
          </div>
        </div>
      )
    } else if (this.state.show === true) {
      return(
        <div id="related_product_flex_item">
          <div id="related_product">
          <img class="related_product_img" src={this.props.product.product_image} />
          <p class="related_product_description">{this.props.product.product_description}</p>
          <p className="related_product_long_description">{this.props.product.product_long_description}</p>
          <RelatedProductQuickView product={this.props.product} onClick={this.showQuickView}/>
          <p id="quickview" onClick={this.showQuickView}>QUICKVIEW</p>
          </div>
        </div>
      )
    }
  }
}

export default RelatedProduct;