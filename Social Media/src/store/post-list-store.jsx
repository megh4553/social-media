import { createContext, useReducer } from "react";

export const PostList = createContext({

  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: (postId) => {},
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
  const [postList,dispatchPostList] = useReducer(
    postListReducer,
    []
  );
  
  const addPost = (userId, postTitle, postBody, tags, postReview) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : {
        id: Date.now(),
        userId:userId,
        title:postTitle,
        body:postBody,
        tags : tags,
        reactions: postReview
      }
    }) 
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POST",
      payload : {
        posts,
      }
    }) 
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload : {
        postId,
      },
    })
  };
  return (
    <PostList.Provider value={{ postList, addPost,addInitialPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
