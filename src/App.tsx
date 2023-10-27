import { useEffect } from "react"
import { useDispatch } from "react-redux"
import '../src/assets/index.css'
import MainNav from "./components/navbar/mainNav/MainNav"
import TopNav from "./components/navbar/topNav/TopNav"
import Routing from "./routes/Routing"
import { getData } from "./service/getData"
import { setProducts } from "./store/slices/dataSlice"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const data = await getData()
      dispatch(setProducts(data))
    })()
  }, [])

  return (
    <>
      <TopNav />
      <MainNav />
      <Routing />
    </>
  )

}

export default App
