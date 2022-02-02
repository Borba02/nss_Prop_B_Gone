import React from "react"



export const Property = ({prop, deleteProp}) => {

    const CurrentUser = parseInt(localStorage.getItem("pbg_user"))

    return (
            <>
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`}   
            </p>
           { 
                prop.userId === CurrentUser  ? 
                    <button className="btn--propertyDelete" onClick={() => deleteProp(prop.id)} >Delete</button> 
                : "" 
            }
       
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