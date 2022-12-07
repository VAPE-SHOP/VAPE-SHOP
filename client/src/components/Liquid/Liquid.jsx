import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Liquid.css';

export default function Liquid(props) {
  console.log(props.liquids);
  return (
    <>
      {props.liquids.map((e) => (
        <MDBCard className="liquid-card" key={e._id}>
          <img src={e.image} />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
            ></div>
          </a>
          <MDBCardBody>
            <MDBCardTitle>{e.name}</MDBCardTitle>
            <Link to={'/oneLiquid'}>
              <Button
                onClick={() => {
                  props.one(e._id);
                }}
                variant="dark"
              >
                More details
              </Button>
            </Link>
          </MDBCardBody>
        </MDBCard>
      ))}
    </>
  );
}
