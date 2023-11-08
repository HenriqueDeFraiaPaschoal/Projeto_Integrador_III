import React from "react"
import { CommentBox, PostBox, UsersBar } from "components"
import "./style.css"

export const UserPost = ({ user, ask, answer, comments }) => {
  const [showComments, setShowComments] = React.useState(false)

  return (
    <>
      <UsersBar user={user} />
      <PostBox body={answer} title={ask} />
      <p
        className="show-more"
        onClick={() => setShowComments((state) => !state)}
      >
        ...
      </p>

      {showComments && comments && (
        <div className="box">
          <div className="comment-container">
            {comments.map((comment, index) => (
              <CommentBox key={index} comments={comment} />
            ))}
          </div>
          <button className="comment-button">Comentar</button>
        </div>
      )}
    </>
  )
}
