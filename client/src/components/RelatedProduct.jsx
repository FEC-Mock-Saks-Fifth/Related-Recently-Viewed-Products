import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProductQuickView from './RelatedProductQuickView.jsx';

const FlexItem = styled.div`
  padding: 10px;
  max-width: 325px;
  min-width: 120px;
  font-size: 12px;
`;
const Img = styled.img`
  margin: 0px 10px;
  width: 80px;
  float: left;
`;

const P1 = styled.p`
  font-weight: 550;
  font-size: 14px;
  margin: 0px;
`;

const P3 = styled.p`
  font-size: 12px;
  margin: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const P2 = styled.p`
  font-style: underline;
  font-size: 12px;
`;

const P4 = styled.a`
  display: none;
`;

const QuickViewHover = styled.div`
  &:hover {
    ${P4} {
      display: flex;
      cursor: pointer;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

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
        <FlexItem >
          <QuickViewHover>
          <div id="related_product">
          <Img src={this.props.product.product_image} />
          <P1>{this.props.product.product_description}</P1>
          <P3 className="product_description">{this.props.product.product_long_description}</P3>
          <P4 onClick={this.showQuickView}>QUICKVIEW</P4>
          </div>
          </QuickViewHover>
        </FlexItem>
      )
    } else if (this.state.show === true) {
      return(
        <FlexItem >
          <QuickViewHover>
          <div id="related_product">
          <Img src={this.props.product.product_image} />
          <P1>{this.props.product.product_description}</P1>
          <P3 className="product_description">{this.props.product.product_long_description}</P3>
          <RelatedProductQuickView product={this.props.product} onClick={this.showQuickView}/>
          <P4 onClick={this.showQuickView}>QUICKVIEW</P4>
          </div>
          </QuickViewHover>
        </FlexItem>
      )
    }
  }
}

export default RelatedProduct;