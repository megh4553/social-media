import { useContext, useRef } from "react";
// import  PostList from "./postList";
import {PostList} from "../store/post-list-store";

const Createpost = () => {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagElement = useRef(); 
  const postReviewElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagElement.current.value.split(" ");
    const postReview = postReviewElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagElement.current.value = "";
    postReviewElement.current.value = "";

    fetch ("https://dummyjson.com/posts/add",{
      method:"POST",
      headers : {"content-type" : "application/json" },
      body:JSON.stringify({
        title : "Hello There😎😎",
        userId : 5,
      })
    }).then((res) => res.json()).then(console.log);

    addPost(userId, postTitle, postBody, tags, postReview)
  }
  return (
    <form className=" create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Enrer your User Id"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
        ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Detail
        </label>
        <textarea
          id="body"
          ref={postBodyElement}
          className="form-control"
          placeholder="Tell us more about this page" 
          rows="5">

        </textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Reviews
        </label>
        <input
        ref={postReviewElement}
          type="text"
          className="form-control"
          id="review"
          placeholder="Enter Reviews"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Enter Tage
        </label>
        <input
          type="text"
          ref={tagElement}
          className="form-control"
          id="tag"
          placeholder="Please Enter tag using space "
        /> 
      </div>
      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};

export default Createpost;