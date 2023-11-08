import React from "react"
import { UserPost } from "components"
import { MenuHamburguer } from "components"
import { useNavigate } from "react-router-dom"

import { userPosts } from "mock" // remover esta linha quando integrar ao backend
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

      <div className="home-content">
        {userPosts &&
          userPosts.map((data, index) => (
            <UserPost
              key={index}
              user={data.user}
              ask={data.question.ask}
              answer={data.question.body}
              comments={data.comments}
            />
          ))}
      </div>
    </main>
  )
}
