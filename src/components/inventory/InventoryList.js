import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Property } from "./Property"

export const InventoryList = () => {

    const [props, updateProperty] = useState([])
   
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
    
    const deleteProp = (id) => {
        fetch(`http://localhost:8088/storedProperty/${id}`,{
            method: "DELETE"
        })
        .then(() => {  
            fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])
}
    return (
        <>
            <button onClick={() => history.push("/inventory/propertyForm")}>New Property</button>
            <div className="property">
                {
                    props.map(a => <Property key={a.id} prop={a} deleteProp={deleteProp}/>)
                }
            </div>
           
        </>
    )
}
//* Changes date to a timestamp
// const toTimestamp = (date) => {
//     const myDate = date.split("-")
//     const newTimestamp = new Date(myDate).getTime()
//     return newTimestamp
// }
//* Makes human numbers out of a timestamp
// const humanDate = (object) => {
//     const format = {
//         day: "numeric",
//         month: "2-digit",
//         year: "numeric",
//       };
//    return( new Date(object.timestamp).toLocaleString(
//     "en-us",
//     format
//   ))}