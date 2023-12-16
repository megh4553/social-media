import { useContext } from "react";
import Post from "./post"
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpiner from "./loadingSpiner";

const PostList = () => {
    const { postList,fetching } = useContext(PostListData);
    
    return(
        <>
        {fetching && <LoadingSpiner />}
        {console.log(postList.length)}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
};
export default PostList;