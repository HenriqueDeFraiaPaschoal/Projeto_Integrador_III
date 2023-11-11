import './style.css'
import { UserPost } from "components"
import { userPosts } from "mock" // remover esta linha quando integrar ao backend

export const HomePage = () => {
  return (
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
  )
}
