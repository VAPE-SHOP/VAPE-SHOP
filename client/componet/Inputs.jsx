import React from 'react'
import classnames from "classnames";

function Inputs({name,label,type,icon,errors ,onChange}) {
  return (
     <div class=" mb-3">
     <label  class="form-label">{label}</label>
     <div class="input-group">
       <span class="input-group-text" ><i class={icon}></i></span>
       <input type={type} name ={name} class="form-control" onChange={onChange}  className={classnames("form-control", { "is-invalid": errors })}
/>
       {errors && <div class="invalid-feedback">{errors}</div>}
     </div>
     </div>
  )
}

export default Inputs;
