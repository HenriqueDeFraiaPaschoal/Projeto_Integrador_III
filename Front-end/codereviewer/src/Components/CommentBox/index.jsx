import React from "react"
import { Rating } from "primereact/rating"
import { IconProfile } from "assets/icons/IconProfile"
import "./style.css"

import { comments } from "mock/comments"

export const CommentBox = () => {
  const [value, setValue] = React.useState(0)

  const changeRating = () => {}

  return (
    <div>
      <div className="comment-container">
        {comments &&
          comments.map((comment, index) => (
            <div key={index} className="comment-content">
              <div className="comment-area">
                <Rating className="star" onChange={changeRating} cancel={false} />
                <p>{comment}</p>
              </div>
              <hr />
              <div className="icon-container">
                <IconProfile />
              </div>
            </div>
          ))}
      </div>
          <button>Comentar</button>
    </div>
  )
}
