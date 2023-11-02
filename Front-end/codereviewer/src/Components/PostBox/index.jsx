import "./style.css"

export const PostBox = ({ title, body }) => {
  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}
