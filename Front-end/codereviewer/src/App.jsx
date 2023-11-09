import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { AccessPage, Login, Register, Home, User } from "./routes"
import { PrimeReactProvider } from "primereact/api"

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccessPage />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
