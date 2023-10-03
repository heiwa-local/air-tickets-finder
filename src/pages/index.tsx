import { Route, Routes } from "react-router-dom"
import { AviaPage } from "./avia"
import { AviaInfoPage } from "./aviaInfo"

export const Routing = () => {
    return (
        <Routes>
            <Route path="/avia" element={<AviaPage/>}/>
            <Route path="/avia/info" element={<AviaInfoPage/>}/>
        </Routes>
    )
}