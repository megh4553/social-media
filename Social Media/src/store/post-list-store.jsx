import { createContext, useReducer } from "react";

export const PostList = createContext({

  postList: [],
  addPost: () => {},
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

  const deletePost = (postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload : {
        postId,
      },
    })
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
