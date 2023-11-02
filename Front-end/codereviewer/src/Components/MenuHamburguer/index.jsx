import React, { useState } from "react"
import { IconMenu } from "assets/icons/IconMenu"
import { IconProfile } from "assets/icons/IconProfile"
import { IconPublish } from "assets/icons/IconPublish"
import { IconHome } from "assets/icons/IconHome"
import "./style.css"

export const MenuHamburguer = ({ isProfilePage = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`menu-container ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((state) => !state)}
    >
      <IconMenu />
      <div className="icon-container">
        {isOpen && (
          <>
            {isProfilePage ? <IconHome /> : <IconProfile />}
            <IconPublish />
          </>
        )}
      </div>
    </div>
  )
}
