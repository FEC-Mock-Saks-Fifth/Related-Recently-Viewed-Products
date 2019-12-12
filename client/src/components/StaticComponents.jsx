import React from 'react';
// import styled from 'styled-components';

// const RelatedSearches = styled.div`
//   font-family: Source Sans Pro, sans-serif;
//   font-size: 12px;
//   text-align: left;
//   border-style: solid;
//   border-width: 1px 0px 0px 0px;
//   border-color: LightGrey;
//   margin: auto;
//   padding: 0px 0px 80px 0px;
//   max-width: 1050px;
// `;

// const MailingListFlexContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   max-width: 1050px;
//   margin: auto;
//   padding: 0px 0px 30px 0px;
//   border: solid;
//   border-color: lightGrey;
//   border-width: 1px 0px 0px 0px;
// `;

// const MailingList = styled.div`
//   font-family: Source Sans Pro, sans-serif;
//   font-size: 12px;
//   text-align: left;
//   border-style: solid;
//   border-width: 0px 0px 0px 0px;
//   border-color: LightGrey;
//   margin: auto;
//   max-width: 1050px;
// `;

// const MailingListLogo = styled.div`
//   margin: 15px;
// `;

// const MailingListLeft = styled.div`
//   margin: 0px 15px 15px 15px;
// `;

// const MailingListRight = styled.div`
//   border-style: solid;
//   border-width: 0px 0px 0px 1px;
//   border-color: lightGrey;
// `;

// const SignUpText = styled.p`
//   margin: 15px;
//   font-size: 16px;
// `;

// const StartEarning = styled.p`
//   font-size: 16px;
// `;

// const SignUpInput = styled.input`
//   margin-left: 15px;
//   width: 300px;
//   height: 30px;
//   border: 2px solid darkGrey;
// `;

// const Footer = styled.div`
//   font-family: Source Sans Pro, sans-serif;
//   font-size: 12px;
//   text-align: center;
//   background-color: black;
//   color: DarkGrey;
//   width: 100%;
//   height: 100%;
// `;

// const ColumnHeader = styled.h3`
//   font-size: 16px;
//   font-weight: 40;
// `;

// const p = styled.p`
//   &:hover {
//     color: white;
//     cursor: pointer;
//   }
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: left;
//   max-width: 1050px;
//   margin: auto;
//   padding: 0px 0px 30px 0px;
//   border: solid;
//   border-color: DarkGrey;
//   border-width: 1px 0px 0px 0px;
// `;


// const FlexItem = styled.div`
//   margin: 0px 110px 0px 0px;
//   text-align: left;
// `;

// const FooterH1 = styled.p`
//   font-size: 30px;
//   padding: 30px 0px 0px 0px;
//   margin: 0px 0px 5px 0px;
// `;

// const FooterH2 = styled.p`
//   font-size: 20px;
//   margin: 0px 0px 15px 0px;
// `;

var StaticComponents = () => (
  <div>
  <div id="related_searches">
    <p>RELATED SEARCHES: <a href="">something something something</a>, <a href="">someotherthing someotherthing</a>, <a href="">yes this too and also this</a></p>
  </div>
  <div id="mailing_list">
    <div id="mailing_list_flex_container">
      <div id="mailing_list_logo">
        <img src="https://image.s5a.com/is/image/saks/SAKS_LOGO_SAKSFIRST_BLACK_TAGLINE?scl=1&qlt=100&fmt=jpg"></img>
      </div>
      <div id="mailing_list_left">
        <p class="start_earning">START EARNING POINTS & MORE</p>
        <p>with our Exclusive Rewards Card <a href="">Apply Now</a></p>
      </div>
      <div id="mailing_list_right">
        <p class="sign_up_text">SIGN UP FOR DAILY EMAILS</p>
        <input class="sign_up_input" type="text"></input>
      </div>
    </div>
  </div>
  <div id="footer">
    <p className="footer_h1">We're Dedicated to Our Customers 24/7</p>
    <p className="footer_h2">1.877.551.7257 - Email - Chat</p>
    <div id="static_flex_container">
      <div id="column1">
        <div id="static_flex_item">
          <h3 class="column_header">Stores & Corporate</h3>
          <p class="footer_item">Store Locations & Events</p>
          <p class="footer_item">Saks At Your Service</p>
          <p class="footer_item">Bridal Salon</p>
          <p class="footer_item">The Fur Salon</p>
          <p class="footer_item">About Us</p>
          <p class="footer_item">Careers</p>
          <p class="footer_item">Privacy Policy</p>
          <p class="footer_item">Website Terms of Use</p>
          <p class="footer_item">FAQ</p>
        </div>
      </div>
      <div id="column2">
        <div id="static_flex_item">
        <h3 class="column_header">Shipping & Returns</h3>
          <p class="footer_item">Shipping Policy</p>
          <p class="footer_item">Returns & Exchanges</p>
          <p class="footer_item">Order Status & Tracking</p>
          <p class="footer_item">Buy Online, Pick Up in Store</p>
          <p class="footer_item">International</p>
        </div>
      </div>
      <div id="column3">
        <div id="static_flex_item">
        <h3 class="column_header">SaksFirst Credit Card</h3>
          <p class="footer_item">SaksFirst</p>
          <p class="footer_item">Apply for the SaksFirst Store Card</p>
          <p class="footer_item">Pay and Manage Store Card</p>
          <p class="footer_item">Pay and Manage Saks Mastercard</p>
        </div>
      </div>
      <div id="column4">
        <div id="static_flex_item">
        <h3 class="column_header">Shop Saks</h3>
          <p class="footer_item">Catalogs</p>
          <p class="footer_item">Gift Cards</p>
        </div>
      </div>
    </div>
    <div id="static_flex_container">
      <div id="social">
        <p>@hackreactor</p>
        <p>© 2019, Designer Designers</p>
      </div>
    </div>
  </div>
  </div>
)

export default StaticComponents;