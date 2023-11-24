import { Avatar } from "components"
import "./style.css"

export const UsersBar = ({ user }) => {
  return (
    <section className="user-container">
      <span className="user-content">
        <Avatar />
        <p>
          {user} | <small>post</small>
        </p>
      </span>
    </section>
  )
}
