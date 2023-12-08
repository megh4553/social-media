import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";


const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);
  return (
    <div className="card post-card" style={{width : "30rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" onClick={() => deletePost(post.id)}><MdDeleteForever />
          </span>
          
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key = {tag}className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
      <div className="alert alert-success cust" role="alert">
          this post has been reacted by {post.reactions} peoples
      </div>
    </div>
  );
};

export default Post;
