import React from "react"
import { Route } from "react-router-dom"
import { DisposalList } from "./components/DisposalList"
import { HistoryList } from "./components/HistoryList"
import { InventoryList } from "./components/inventory/InventoryList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/disposal">
                <DisposalList />
            </Route>
            <Route path="/inventory">
                <InventoryList />
            </Route>
            <Route path="/history">
                <HistoryList />
            </Route>
        
        </>
    )
}