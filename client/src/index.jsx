import ReactDom from 'react-dom';
import React from 'react';
import RecentlyViewedList from './components/RecentlyViewedList.jsx';
import RecommendedProductsList from './components/RecommendedProductsList.jsx';
import RelatedProductsList from './components/RelatedProductsList.jsx';
import StaticComponents from './components/StaticComponents.jsx';

ReactDom.render(<RecommendedProductsList />, document.getElementById('recommended_products'));
ReactDom.render(<RecentlyViewedList />, document.getElementById('recently_viewed'));
ReactDom.render(<RelatedProductsList />, document.getElementById('related_products'));
ReactDom.render(<StaticComponents />, document.getElementById('static_components'));