import { Route, Routes } from "react-router-dom"
import Basket from "../pages/basket/Basket"
import CategoryPage from "../pages/category"
import Findstores from "../pages/findStores/Findstores"
import Index from "../pages/home/Index"
import Notfound from "../pages/notFound/Notfound"
import Redcard from "../pages/redcard/Redcard"
import Registry from "../pages/registry/Registry"
import Target from "../pages/targetCircle/Target"
import Weeklyad from "../pages/weeklyAd/Weeklyad"
import DetailPage from "../pages/detailpage/DetailPage"

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gift-registry" element={<Registry />} />
                <Route path="/weekly-ad" element={<Weeklyad />} />
                <Route path="/redcard" element={<Redcard />} />
                <Route path="/circle" element={<Target />} />
                <Route path="/find-stores" element={<Findstores />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/category/:catElement" element={<CategoryPage />} />
                <Route path="/:id" element={<DetailPage />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}

export default Routing