import React from "react"
import { CommentBox, PostBox, UsersBar } from "components"
import "./style.css"

export const UserPost = ({ user, ask, answer, comments }) => {
  const [showComments, setShowComments] = React.useState(false)

  const toggleComments = () => {
    setShowComments((state) => !state)
  }

  return (
    <>
      <UsersBar user={user} />
      <PostBox body={answer} title={ask} />
      <p className="show-more" onClick={toggleComments}>
        ...
      </p>
      <div className={`box ${showComments ? "open" : ""}`}>
        <div className="comment-container">
          {comments &&
            comments.map((comment, index) => (
              <CommentBox key={index} comments={comment} />
            ))}
        </div>
      </div>
      {showComments && (
        <div className="btn-container">
          <button className="comment-button">Comentar</button>
        </div>
      )}
    </>
  )
}
