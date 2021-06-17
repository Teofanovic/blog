import Link from 'next/link';

const Post = ({ id, title, children }) => {
  return (
    <div className="p-4 py-3">
      <Link href={`/posts/${id}`}>
        <h4 style={{ cursor: 'pointer' }}>{title}</h4>
      </Link>
      <p
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          height: '20px',
        }}
      >
        {children}
      </p>
      <hr />
    </div>
  );
};

export default Post;
