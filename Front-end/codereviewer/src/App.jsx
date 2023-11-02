import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { AccessPage, Login, Register, Home } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccessPage />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
