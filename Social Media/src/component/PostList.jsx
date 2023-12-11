import { useContext } from "react";
import Post from "./post"
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData);

    const handleGetPostClick = () =>{
        fetch("https://dummyjson.com/posts")
        .then((res) => res.json()).then((data => addInitialPost(data.posts))  );
    }
    // console.log(postList);
    return(
        <>
            {
                postList.length === 0 && <WelcomeMessage onGetPostClick={handleGetPostClick}/>
            }
            {postList.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </>
    )
};
export default PostList;