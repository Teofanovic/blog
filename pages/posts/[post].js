import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';

const Post = () => {
  const router = useRouter();
  const postId = router.query.post;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?id=${postId}&_expand=user`
        )
        .then((res) => {
          if (res.data[0]) {
            setPost(res.data[0]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [postId]);

  return (
    <>
      <Header currentRoute="posts" />
      {post && (
        <div className="d-flex align-items-start flex-column p-4">
          <h3>{post.title}</h3>
          <h6 className="ps-3">
            Author:{' '}
            <i>
              @{post.user.username} ({post.user.name})
            </i>
          </h6>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default Post;
