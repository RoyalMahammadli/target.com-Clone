import { Route, Routes } from "react-router-dom"
import Index from "../pages/home/Index"
import Registry from "../pages/registry/Registry"
import Redcard from "../pages/redcard/Redcard"
import Target from "../pages/targetCircle/Target"
import Findstores from "../pages/findStores/Findstores"
import Weeklyad from "../pages/weeklyAd/Weeklyad"
import Notfound from "../pages/notFound/Notfound"
import Basket from "../pages/basket/Basket"
import CategoryPage from "../pages/category"

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
                <Route path="/category/:cat" element={<CategoryPage />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}

export default Routing