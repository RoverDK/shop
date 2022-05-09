import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../MainLayout"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<h1>Home</h1>} />
                <Route path="contact" element={<h1>Contact</h1>} />
                <Route path="about" element={<h1>About</h1>} />
            </Route>
        </Routes>
    )
}