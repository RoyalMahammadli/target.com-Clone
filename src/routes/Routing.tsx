import { Route, Routes } from "react-router-dom"
import Index from "../pages/home/Index"
import Registry from "../pages/registry/Registry"
import Redcard from "../pages/redcard/Redcard"
import Target from "../pages/targetCircle/Target"

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gift-registry" element={<Registry />} />
                <Route path="/redcard" element={<Redcard />} />
                <Route path="/circle" element={<Target />} />

            </Routes>
        </div>
    )
}

export default Routing