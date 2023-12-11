import { useContext, useEffect } from "react";
import Post from "./post"
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData);
    const [fetching, setfetching] = useState(false);
    useEffect (() => {
        setfetching(true);
        console.log("fetch started"),

        fetch("https://dummyjson.com/posts").then((ras) => ras.json()).then(data => {
            addInitialPost(data.posts);
            setfetching(false);
        });
    },[])

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