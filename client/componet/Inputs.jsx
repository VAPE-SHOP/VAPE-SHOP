import React from 'react'
   
function Inputs({name,label,type,icon,error ,onChange}) {
  return (
     <div class=" mb-3">
     <label  class="form-label">{label}</label>
     <div class="input-group">
       <span class="input-group-text" ><i class={icon}></i></span>
       <input type={type} name ={name} class="form-control" onChange={onChange}/>
     </div>
     </div>
  )
}

export default Inputs