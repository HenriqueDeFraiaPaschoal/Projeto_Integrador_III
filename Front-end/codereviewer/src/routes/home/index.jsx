import React from "react"
import { MenuHamburguer } from "components"
import { Outlet, useNavigate } from "react-router-dom"

import "./style.css"

export const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="home-container">
      <button className="home-logout" onClick={() => navigate("/")}>
        SAIR
      </button>
      <div className="home-menu-container">
        <MenuHamburguer />
      </div>
      <Outlet/>
    </main>
  )
}
