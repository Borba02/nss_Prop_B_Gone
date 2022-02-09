import React from "react"
import { useLocation } from "react-router-dom"



export const Property = ({prop, deleteProp, disposeProp, restoreProp}) => {

    const CurrentUser = parseInt(localStorage.getItem("pbg_user"))
    const Loc = useLocation()

    return (
            <>
            {
            Loc.pathname === "/history" && prop.disposedOf != "" ? 
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`} <br />        
                        Disposed: {prop.disposedOf === "" ? `No` : `Yes ( ${prop.disposedOf} )` }
            </p> : ""
            }
            {
            Loc.pathname === "/inventory" && prop.disposedOf === "" ? 
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`} <br />        
                        Disposed: {prop.disposedOf === "" ? `No` : `Yes`}
            </p> : ""
            }
            {
            Loc.pathname === "/disposal" && prop.disposedOf === "" ? 
            <p className="property">         
                        --- <br/>VIN:{prop.vin} <br/>
                        SECT: {prop.location?.name}<br/> 
                        Stored: {prop.storedDate} <br/>
                        Status: {prop.onHold ? `On Hold` : `Cleared`} <br />        
                        Disposed: {prop.disposedOf === "" ? `No` : `Yes:`}
            </p> : ""
            }
            
           { 
                prop.userId === CurrentUser && Loc.pathname === "/inventory"  ? 
                    <button className="btn--propertyDelete" onClick={() => deleteProp(prop.id)} >Delete</button> 
                : "" 
            }
           { 
                prop.disposedOf != "" && Loc.pathname === "/history"  ? 
                    <button className="btn--propertyDelete" onClick={() => deleteProp(prop.id)} >Delete</button> 
                : "" 
            }
           { 
                Loc.pathname === "/disposal" && prop.disposedOf === ""  ? 
                    <button className="btn--propertyDisposed" onClick={() => disposeProp(prop.id)} >Mark Disposed</button> 
                : "" 
            }
            {
                Loc.pathname === "/history" && prop.disposedOf != "" ? 
                <button className="btn--propertyRestore" onClick={() => restoreProp(prop.id)} >Restore</button>
             : ""
            }
       
            </>
    )
    
}

