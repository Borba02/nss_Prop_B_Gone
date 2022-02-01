import React, { useEffect, useState } from "react"


export const Property = ({prop}) => {
    const [props, updateProperty] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/storedProperty?_expand=location&_expand=user")
        .then((res) => res.json())
        .then((PropertyArray) => {
            updateProperty(PropertyArray)
        })
    }, [])

    return (
        
            <p className="property">
               

                   
                        --- {prop.vin} {prop.location?.name} {prop.storedDate} {prop.onHold ? `On Hold` : ``}
                   
                
               
            </p>
       
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