import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Reg from "./Reg"
function App()
{
  return(
    <>
    <h1>Iam app</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/reg" element ={<Reg/>}/>
      <Route path="/h" element ={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
