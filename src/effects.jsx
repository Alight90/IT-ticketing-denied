import { useState,useEffect } from "react";
export default function Effects(){
const [count, setCount] = useState(0)
const [name,setName] = useState("")
useEffect(function myEffect(){
    console.log('my effect is working')
},[count])
const updateCount = (c) =>{
setCount(curr=> curr+1)
}
const handleChange= (e)=>{
    setName(e.target.value)
}

return (
    <div>
    <button style={{backgroundColor:"gray" }} onClick={updateCount}>{count}</button>
    <p>{name}</p>
    <input value={name} type="text" onChange={handleChange} />
    </div>
)
}