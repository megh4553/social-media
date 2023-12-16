import { createContext, useEffect, useCallback, useReducer, useState } from "react";

export const PostList = createContext({

  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) =>{
  let newPostList = currentPostList;
  if(action.type === "DELETE_POST"){
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    ); 
     
  } 
  else if(action.type ==="ADD_POST"){
    newPostList = [action.payload, ...currentPostList];
  }
  else if(action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts; 
  }
  return newPostList;
};

const PostListProvider = ({children}) => {
  const [postList,dispatchPostList] = useReducer(postListReducer,[]);
  const [fetching, setFetching] = useState(false);

  
  const addPost = (post) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : post
    }) 
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POST",
      payload : {
        posts,
      }
    }) 
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type : "DELETE_POST",
        payload : {
          postId,
        },
      })
    },
    [dispatchPostList]
  );

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal}).then((res) => res.json)
    .then((data) => {addInitialPosts(data.posts);
      setFetching(false);
    });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
