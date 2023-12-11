import { useContext } from "react";
import Post from "./post"
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const { postList } = useContext(PostListData);
    // console.log(postList);
    return(
        <>
            {
                postList.length === 0 && <WelcomeMessage />
            }
            {postList.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </>
    )
};
export default PostList;