import { PostBox, UsersBar } from "components"
import "./style.css"
import { MenuHamburguer, CommentBox } from "components"

import { userPost } from "mock" // remover esta linha quando integrar ao backend

export const Home = () => {
  const { ask, body } = userPost.question

  return (
    <main className="home-container">
      <button className="home-logout">SAIR</button>
      <div className="home-menu-container">
        <MenuHamburguer />
      </div>

      <div className="home-content">
        <UsersBar user={userPost.user} />
        <PostBox body={body} title={ask} />
        <p className="show-more" onClick={() => console.log('cliquei aqui...')}>...</p>
      </div>

      <CommentBox />
    </main>
  )
}
