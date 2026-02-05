import { useState,useEffect} from "react";
import "./NoForm.css"

export default function NoForm({noFormSubmit}){

    const [formValues,setFormValues] = useState({Requestor:"",Request_Description:""})

    function handleUpdate(evt){
        const {name,value} = evt.target
        setFormValues(curr=>({...curr,[name]:value}))
        
    }
    const handleSubmit=e=>{e.preventDefault();
        noFormSubmit(formValues);
        setFormValues({Requestor:"",Request_Description:""})
    }
    const isEmpty = str => !str.trim();
return <div><form onSubmit={handleSubmit}>
    <label htmlFor="Requestor"><b>Requestor Name:</b></label>
      <br />
      <input
        type="text"
        value={formValues.Requestor}
        id="Requestor"
        name="Requestor"
        onChange={handleUpdate}
      />
      <br />

      <label htmlFor="Request_Description"><b>Description</b></label>
      <br />
      <textarea
        type="text"
        className="Request_Description"
        placeholder=""
        value={formValues.Request_Description}
        id="Request_Description"
        name="Request_Description"
        onChange={handleUpdate}
      />
      <br />
      <button disabled={
    isEmpty(formValues.Requestor) ||
    isEmpty(formValues.Request_Description)
  }
className= {
    isEmpty(formValues.Requestor) ||
    isEmpty(formValues.Request_Description)
   ? "disableButton" : "submitButton"}
>
        Submit Request
      </button>

    </form>
    </div>  
}