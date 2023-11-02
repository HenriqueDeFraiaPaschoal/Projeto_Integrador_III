import { Logo } from "components/Logo"
import { Outlet } from "react-router-dom"
import "./style.css"

export const AccessPage = () => {

  return (
    <>
      <div className="tela-login">
        <div className="container">
          <Outlet />
        </div>

        <section className="footer-container">
          <Logo />
          <p>Code Reviewer</p>
        </section>
      </div>
    </>
  )
}
