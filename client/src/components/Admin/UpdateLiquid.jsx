import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateLiquid = ({ up }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand or Name liquid</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price DNT</Form.Label>
          <Form.Control
            type="number"
            placeholder="DNT"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Details"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            return up({ name, price, description, image });
          }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateLiquid;
