import { Route, Routes } from "react-router-dom"

export const Routing = () => {
    return (
        <Routes>
            <Route path="/avia" element={<span>a</span>}/>
            <Route path="/avia/info" element={<span>b</span>}/>
        </Routes>
    )
}