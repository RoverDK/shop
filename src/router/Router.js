import { Route, Routes } from "react-router-dom"
import { CardList } from "../components/CardList"
import { ItemPage } from "../components/ItemPage"
import { MainLayout } from "../MainLayout"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<CardList/>} />
                <Route path="contact" element={<h1>Contact</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="item/:id" element={<ItemPage />} />
            </Route>
        </Routes>
    )
}