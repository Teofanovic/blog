const Post = ({ title, author, children }) => {
  return (
    <div className="p-4 py-3">
      <h4>{title}</h4>
      <h6>By: {author}</h6>
      <p>{children}</p>
      <hr />
    </div>
  );
};

export default Post;
