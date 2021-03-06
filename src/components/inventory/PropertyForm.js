import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export const PropertyForm = () => {
    const [property, addProperty] = useState({
        id: null,
        vin: "",
        storedDate: "",
        onHold: false,
        disposedOf: "",
        userId: null,
        locationId: 0
    })

    const [locations, addLocation] = useState ([])
    const [currentLoc, setCurrentLoc] = useState ([])

    useEffect(() => {
        fetch("http://localhost:8088/locations")
          .then((res) => res.json())
          .then((data) => {
            addLocation(data);
          });
      }, []);

    const history = useHistory()

    const saveProperty = (evt) => {
        evt.preventDefault()

    const newProperty = {
        id: property.id,
        vin: property.vin,
        storedDate: property.storedDate,
        onHold: property.onHold,
        disposedOf: "",
        userId: parseInt(localStorage.getItem("pbg_user")),
        locationId: currentLoc
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty)
    }

    return fetch("http://localhost:8088/storedProperty?_expand=location", fetchOption)
        .then(() => 
            history.push("/inventory")
    )
}

const UserLocInput = (event) => {
    setCurrentLoc(parseInt(event.target.value));
  };

    return (
        <form className="propertyForm">
            <h2 className="propertyForm_title">Add New Prop</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="VIN">VIN:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="VIN"
                        onChange={(evt) => {
                            const copy = { ...property }
                            copy.vin = evt.target.value
                            addProperty(copy)
                        }}
                        />
                </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="dateStored">Date Stored:</label>
                        <input type="date" id="" placeholder="Select Date" 
                        onChange={(evt) => {
                            const copy = { ...property }
                            copy.storedDate = evt.target.value
                            addProperty(copy)
                        }}
                        />
                    </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="onHold">On Hold:</label>
                    <input required type="checkbox" className="form-control" placeholder="Hold" value="true"
                    onChange={(evt) => {
                        const copy = { ...property }
                        copy.onHold = evt.target.checked
                        addProperty(copy)
                    }}
                />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="location">Location:</label>
                <select required name="location" className="form-control" 
                onChange={UserLocInput}>
                <option value="0">Select a location</option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                    ))}                  

                </select>
            </fieldset>
            <button className="btn btn-primary" onClick={saveProperty}>
        Submit New Prop
      </button>
        </form>         
    )
}