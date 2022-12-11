import React,{useState} from 'react'
import axios from 'axios'
function Postvape() {
  
  const [name,Setname] = useState("")
  const [description,Setdescription] = useState("")
  const [price,Setprice] = useState("")
  const [image,Setimage] = useState("")
  
  
  var add =() =>{
      axios.post("http://localhost:8080/vape/add",{name:name,description:description,price:price,image:image})
      .then((res)=>{
          Setname(res)
          Setdescription(res)
          Setprice(res)
          Setimage(res)
      })
   
  }
  return (
    <div className="shop-card">
      <div className="add-card">
        <input placeholder="Name" className="add-name" onChange={(e)=>{
            Setname(e.target.value)}} ></input>
        <input placeholder="Description" className="add-desceiption" onChange={(e)=>{
            Setdescription(e.target.value)}} ></input>
        <input placeholder="price" className="add-price" onChange={(e)=>{
            Setprice(e.target.value)}} ></input>
        <input placeholder="image.." className="add-details" onChange={(e)=>{
            Setimage(e.target.value)}} ></input>

        <button className="btn"  onClick={()=>{
           add();
            window.location.reload()}}>Add</button>
      </div>
    </div>
  );
};
export default Postvape