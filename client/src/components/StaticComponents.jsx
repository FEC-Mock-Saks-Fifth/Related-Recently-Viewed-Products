import React from 'react';
import styled from 'styled-components';

const RelatedSearches = styled.div`
  font-family: Source Sans Pro, sans-serif;
  font-size: 12px;
  text-align: left;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: LightGrey;
  margin: auto;
  padding: 0px 0px 80px 0px;
  max-width: 1050px;
`;

const MailingListFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1050px;
  margin: auto;
  padding: 0px 0px 30px 0px;
  border: solid;
  border-color: lightGrey;
  border-width: 1px 0px 0px 0px;
`;

const MailingList = styled.div`
  font-family: Source Sans Pro, sans-serif;
  font-size: 12px;
  text-align: left;
  border-style: solid;
  border-width: 0px 0px 0px 0px;
  border-color: LightGrey;
  margin: auto;
  max-width: 1050px;
`;

const MailingListLogo = styled.div`
  margin: 15px;
`;

const MailingListLeft = styled.div`
  margin: 0px 15px 15px 15px;
`;

const MailingListRight = styled.div`
  border-style: solid;
  border-width: 0px 0px 0px 1px;
  border-color: lightGrey;
`;

const SignUpText = styled.p`
  margin: 15px;
  font-size: 16px;
`;

const StartEarning = styled.p`
  font-size: 16px;
`;

const SignUpInput = styled.input`
  margin-left: 15px;
  width: 300px;
  height: 30px;
  border: 2px solid darkGrey;
`;

const Footer = styled.div`
  font-family: Source Sans Pro, sans-serif;
  font-size: 12px;
  text-align: center;
  background-color: black;
  color: DarkGrey;
  width: 100%;
  height: 100%;
`;

const ColumnHeader = styled.h3`
  font-size: 16px;
  font-weight: 40;
`;

const ColumnItem = styled.p`
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  max-width: 1050px;
  margin: auto;
  padding: 0px 0px 30px 0px;
  border: solid;
  border-color: DarkGrey;
  border-width: 1px 0px 0px 0px;
`;


const FlexItem = styled.div`
  margin: 0px 110px 0px 0px;
  text-align: left;
`;

const FooterH1 = styled.p`
  font-size: 30px;
  padding: 30px 0px 0px 0px;
  margin: 0px 0px 5px 0px;
`;

const FooterH2 = styled.p`
  font-size: 20px;
  margin: 0px 0px 15px 0px;
`;

const A = styled.a`
  color: black;
  font-weight: bold;
`;

var StaticComponents = () => (
  <div>
  <RelatedSearches>
    <p>RELATED SEARCHES: <A href="">something something something</A>, <A href="">someotherthing someotherthing</A>, <A href="">yes this too and also this</A></p>
  </RelatedSearches>
  <MailingList>
    <MailingListFlexContainer>
    <MailingListLogo>
    <img src="https://image.s5a.com/is/image/saks/SAKS_LOGO_SAKSFIRST_BLACK_TAGLINE?scl=1&qlt=100&fmt=jpg"></img>
    </MailingListLogo>
    <MailingListLeft>
    <StartEarning>START EARNING POINTS & MORE</StartEarning>
    <p>with our Exclusive Rewards Card <A href="">Apply Now</A></p>
    </MailingListLeft>
    <MailingListRight>
    <SignUpText>SIGN UP FOR DAILY EMAILS</SignUpText>
    <SignUpInput type="text"></SignUpInput>
    </MailingListRight>
    </MailingListFlexContainer>
  </MailingList>
  <Footer>
    <FooterH1>We're Dedicated to Our Customers 24/7</FooterH1>
    <FooterH2>1.877.551.7257 - Email - Chat</FooterH2>
    <FlexContainer>
    <div id="column1">
    <FlexItem>
      <ColumnHeader>Stores & Corporate</ColumnHeader>
      <ColumnItem>Store Locations & Events</ColumnItem>
      <ColumnItem>Saks At Your Service</ColumnItem>
      <ColumnItem>Bridal Salon</ColumnItem>
      <ColumnItem>The Fur Salon</ColumnItem>
      <ColumnItem>About Us</ColumnItem>
      <ColumnItem>Careers</ColumnItem>
      <ColumnItem>Privacy Policy</ColumnItem>
      <ColumnItem>Website Terms of Use</ColumnItem>
      <ColumnItem>FAQ</ColumnItem>
    </FlexItem>
    </div>
    <div id="column2">
    <FlexItem>
      <ColumnHeader>Shipping & Returns</ColumnHeader>
      <ColumnItem>Shipping Policy</ColumnItem>
      <ColumnItem>Returns & Exchanges</ColumnItem>
      <ColumnItem>Order Status & Tracking</ColumnItem>
      <ColumnItem>Buy Online, Pick Up in Store</ColumnItem>
      <ColumnItem>International</ColumnItem>
    </FlexItem>
    </div>
    <div id="column3">
    <FlexItem>
      <ColumnHeader>SaksFirst Credit Card</ColumnHeader>
      <ColumnItem>SaksFirst</ColumnItem>
      <ColumnItem>Apply for the SaksFirst Store Card</ColumnItem>
      <ColumnItem>Pay and Manage Store Card</ColumnItem>
      <ColumnItem>Pay and Manage Saks Mastercard</ColumnItem>
    </FlexItem>
    </div>
    <div id="column4">
    <FlexItem>
      <ColumnHeader>Shop Saks</ColumnHeader>
      <ColumnItem>Catalogs</ColumnItem>
      <ColumnItem>Gift Cards</ColumnItem>
    </FlexItem>
    </div>
    </FlexContainer>
    <FlexContainer>
    <div id="social">
      <p>@hackreactor</p>
      <p>© 2019, Designer Designers</p>
    </div>
    </FlexContainer>
  </Footer>
  </div>
)

export default StaticComponents;