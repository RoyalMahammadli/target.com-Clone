import { Route, Routes } from "react-router-dom"
import Index from "../pages/home/Index"
import Registry from "../pages/registry/Registry"
import Redcard from "../pages/redcard/Redcard"
import Target from "../pages/targetCircle/Target"
import Findstores from "../pages/findStores/Findstores"
import Weeklyad from "../pages/weeklyAd/Weeklyad"

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

            </Routes>
        </div>
    )
}

export default Routing