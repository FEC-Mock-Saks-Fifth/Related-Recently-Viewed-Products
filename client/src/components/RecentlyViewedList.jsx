import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import styled from 'styled-components';

const ThemeProvider = styled.div`
  font-family: Source Sans Pro, sans-serif;
  text-align: center;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const H3 = styled.h3`
  font-weight: 340;
`

class RecentlyViewedList extends React.Component {
  constructor() {
    super()
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
      <ThemeProvider>
      <div>
        <H3>Recently Viewed</H3>
        <FlexContainer id="recently_viewed">
          {this.state.products.map((product, i) => {
            return <Product product={product} key={i} />
          })}
        </FlexContainer>
      </div>
      </ThemeProvider>
    )
  }
}

export default RecentlyViewedList;