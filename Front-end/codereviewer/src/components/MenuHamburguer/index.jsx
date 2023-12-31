import React, { useState } from "react"
import { IconMenu } from "assets/icons/IconMenu"
import { IconProfile } from "assets/icons/IconProfile"
import { IconPublish } from "assets/icons/IconPublish"
import { IconHome } from "assets/icons/IconHome"
import { Modal } from "components/Modal"
import { useNavigate } from "react-router-dom"
import "./style.css"

export const MenuHamburguer = ({ isProfilePage = false }) => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [showPublishModal, setShowPublishModal] = useState(false)

  const handlePublishClick = () => {
    setShowPublishModal(true)
  }

  return (
    <div
      className={`menu-container ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((state) => !state)}
    >
      <IconMenu />
      <div className="icon-container">
        {isOpen && (
          <>
            {isProfilePage ? (
              <IconHome />
            ) : (
              <IconProfile onClick={() => navigate("/dashboard/user")} />
            )}
            <IconPublish onClick={handlePublishClick} />
          </>
        )}
      </div>

      {showPublishModal && <Modal onClose={() => setShowPublishModal(false)} />}
    </div>
  )
}
