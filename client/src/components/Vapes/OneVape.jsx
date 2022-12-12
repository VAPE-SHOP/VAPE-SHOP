import React from "react";
const OneVape = ({oneVape}) => {
 console.log(oneVape,'yeey')
  return (
    <div>
      <div className="container mx-auto mt-4 ">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <div className="card">
              <img src={oneVape.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{oneVape.name}</h4>
                <h6>{oneVape.description}</h6>
                <h3>{oneVape.price}DTN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}; 
//  rendring the element of one vape  

export default OneVape;
