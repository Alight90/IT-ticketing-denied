import { useState, useEffect } from "react"
import NoForm from "./NoForm"
import { v4 as uuid } from "uuid"
const NO_SERVICE_URL = "https://naas.isalman.dev/no"
export default function NoFetcher(){
 const[request,setRequest] = useState({Requestor:"",Request_Description:"" ,Approval:''})
 const[quote,setQuote] = useState()
 const [nextQuote, setNextQuote] = useState();
  useEffect(() => {
    preloadQuote();   // fetch the first quote on mount
  }, [])
 const noFormSubmit=(requests)=>{
    setRequest(curr => ({
  Request_Number:uuid(),...requests,
  Approval: "Denied"
}));
    setQuote(nextQuote); 
    preloadQuote();  
}

async function preloadQuote() {
    const response = await fetch(NO_SERVICE_URL)
    const jsonResponse = await response.json()
    setNextQuote(jsonResponse.reason)
}
return( <div>
    <h1>IT Request Form</h1>
        <div>
{Object.entries(request)
  .filter(([key, value]) => typeof value === "string" && value.trim().length > 0)
  .map(([key, value]) => (
    <div
      key={key}
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "6px",
        background: "#fafafa"
      }}
    >
      <p
        style={{
          margin: 0,
          color: key === "Approval" ? "red" : undefined
        }}
      >
        {key}: {value}
      </p>
    </div>
  ))}
    </div>
        {request.Requestor.trim() !== "" && quote && (
  <h3>Reasoning: {quote}</h3>
)}

        <NoForm noFormSubmit= {noFormSubmit} fetchNo={fetchNo}/>
    </div>
)

}