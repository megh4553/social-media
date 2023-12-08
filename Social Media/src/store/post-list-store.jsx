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
    newPostList = [...currentPostList, action.payload];
  }
  return newPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer, 
    Default_Post_List
  );
  
  const addPost = (userId, postTitle, postBody, tags, postReview) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : {
        id: Date.now(),
        userId:userId,
        title:postTitle,
        body:postBody,
        tage : tags,
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
}
  const Default_Post_List = [{
    id:'1',
    title : 'Going to mumbai ',
    body : 'Hi I am going to mumbai😊😊',
    reactions : 2,
    userId : 'User-9',
    tags : ['vacation','Mumbai'],
  },{
    id:'2',
    title : 'I am in Final Year 🎉🎉',
    body : 'I will be pass yoo, 😎😎',
    reactions : 17,
    userId : 'User-9',
    tags : ['vacation','Mumbai'],
  },
]

export default PostListProvider;
