import React, { useEffect, useState } from "react"



export const Property = ({prop, deleteProp}) => {

    const [deletedProp, setDeletedProp] = useState(0)
    
    useEffect(() => {
        fetch(`http://localhost:8088/storedProperty/${prop.id}`)
          .then((res) => res.json())
          .then((data) => {
            setDeletedProp(data);
          });
      }, []);

    return (
            <>
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`}   
            </p>
            <button className="btn--propertyDelete" onClick={() => deleteProp(prop.id)} >Delete</button>
       
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