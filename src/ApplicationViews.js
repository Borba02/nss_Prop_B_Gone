import React from "react"
import { Route } from "react-router-dom"
import { DisposalList } from "./components/DisposalList"
import { HistoryList } from "./components/HistoryList"
import { InventoryRoutes } from "./InventoryRoutes"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/disposal">
                <DisposalList />
            </Route>
            <Route path="/inventory">
                <InventoryRoutes />
            </Route>
            <Route path="/history">
                <HistoryList />
            </Route>
        
        </>
    )
}