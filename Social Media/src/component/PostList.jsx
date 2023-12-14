import { useContext, useEffect,useState } from "react";
import Post from "./post"
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpiner from "./loadingSpiner";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData);
    
    return(
        <>
        {fetching && <LoadingSpiner />}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
};
export default PostList;