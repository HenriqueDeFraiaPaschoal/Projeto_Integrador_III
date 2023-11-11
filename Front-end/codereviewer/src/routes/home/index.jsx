import React from "react"
import { MenuHamburguer } from "components"
import { Outlet, useNavigate } from "react-router-dom"

import "./style.css"

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="home-cabecalho">
        <div className="home-menu-container">
          <MenuHamburguer />
        </div>
        <button className="home-logout" onClick={() => navigate("/")}>
          SAIR
        </button>
      </div>
      <main className="home-container">
        <Outlet />
      </main>
    </>
  )
}
