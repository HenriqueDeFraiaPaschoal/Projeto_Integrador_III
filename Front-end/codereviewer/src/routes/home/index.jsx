import React from "react"
import { PostBox, UsersBar } from "components"
import "./style.css"
import { MenuHamburguer, CommentBox } from "components"

import { userPost } from "mock" // remover esta linha quando integrar ao backend
import { useNavigate } from "react-router-dom"
import { UserInfo } from "components/UserInfo"

export const Home = () => {

  const navigate = useNavigate();  

  const [showComments, setShowComments] = React.useState(false)

  return (
    <main className="home-container">
      <button className="home-logout" onClick={() => navigate("/")}>SAIR</button>
      <div className="home-menu-container">
        <MenuHamburguer />
      </div>

      <div className="home-content">
        <UsersBar user={userPost[0].user} />
        <PostBox body={userPost[0].question.body} title={userPost[0].question.ask} />
        <p
          className="show-more"
          onClick={() => setShowComments((state) => !state)}
        >
          ...
        </p>
        <div className={`comment-box ${showComments ? "active" : ""}`}>
          <CommentBox />
        </div>
      </div>
    </main>
  )
}
