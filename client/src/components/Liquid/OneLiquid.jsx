import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

import './Liquid.css';

const OneLiquid = (props) => {
  console.log(props.liquidOne);
  return (
    <>
      {/* { */}
      <MDBCard className="liquid-card" key={props.liquidOne._id}>
        <img src={props.liquidOne.image} />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </a>
        <MDBCardBody>
          <MDBCardTitle>{props.liquidOne.name}</MDBCardTitle>
          <MDBCardText>{props.liquidOne.description}</MDBCardText>
          <Button variant="dark">Add to Buy</Button>{' '}
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default OneLiquid;
