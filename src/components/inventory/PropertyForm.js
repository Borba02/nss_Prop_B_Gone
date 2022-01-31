import React from "react"

export const PropertyForm = () => {
    const [property, addProperty] = useState({
        id: null,
        vin: "",
        storedDate: "",
        onHold: null,
        disposedOf: "",
        userId: null,
        locationId: null
    })

    const history = useHistory()

    const saveProperty = (evt) => {
        evt.preventDefault()

    const newProperty = {
        id: property.id,
        
    }
    }


    return (
        
           
            
                <div>
                    Yee
                </div>
            
            
            
        
    )
}