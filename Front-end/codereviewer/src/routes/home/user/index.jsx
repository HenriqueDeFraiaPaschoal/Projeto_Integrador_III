import { InputComment } from "components/InputComment"
import { UserInfo } from "components/UserInfo"
import { UserPost } from "components"
import { userPosts } from "mock"
import "./style.css"

export const User = () => {
  return (
    <div className="user-info-container">
      <div>
        <UserInfo />
        {/* <InputComment /> */}
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
    </div>
  )
}
