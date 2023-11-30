import React from "react";
import "./style.css";
import { UserPost } from "components";
import { GetAllPosts } from "services/users";
//import { userPosts } from "mock" // remover esta linha quando integrar ao backend

export const HomePage = () => {
  const [userPosts, setUserPosts] = React.useState([]);

  const getPosts = React.useCallback(async () => {
    try {
      const response = await GetAllPosts();
      setUserPosts(response);
      console.log(response);
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className="home-content">
      {userPosts &&
        userPosts.map((data, index) => (
          <UserPost
            key={index}
            user={data.id}
            ask={data.content}
            // answer={data.question.ask}
            //comments={data.comments}
          />
        ))}
    </div>
  );
};
