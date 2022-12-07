import React from 'react';
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img height="60" alt="logo" src="./src/assets/VAPE-SHOP.png" />
          </a>
          <small className="ml-2">
            &copy; VAPE-SHOP, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://fr-fr.facebook.com"
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="mx-3 p-2"
            href="https://twitter.com/?lang=fr"
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://www.instagram.com/?hl=fr"
          >
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
