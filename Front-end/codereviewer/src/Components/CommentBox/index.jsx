import React from "react"
import { Rating } from "primereact/rating"
import { IconProfile } from "assets/icons/IconProfile"
import "./style.css"

export const CommentBox = ({ comments }) => {
  const [value, setValue] = React.useState(0)

  return (
    <div>
      <div>
        <div className="comment-content">
          <div className="comment-area">
            <Rating
              className="star"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              cancel={false}
            />
            <p>{comments}</p>
          </div>
          <hr />
          <div className="icon-container">
            <IconProfile />
          </div>
        </div>
      </div>
    </div>
  )
}
