import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Post from '../../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
      .then((res) => {
        setPosts(res.data);
        if (res.headers['x-total-count'] % itemsPerPage === 0) {
          setNumberOfPages(res.headers['x-total-count'] / itemsPerPage);
        } else {
          setNumberOfPages(res.headers['x-total-count'] / itemsPerPage + 1);
        }
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <>
      <Header currentRoute="posts" />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-6 justify-content-center">
          {posts &&
            posts.map((post) => (
              <Post key={post.id} title={post.title} author={'test'}>
                {post.body}
              </Post>
            ))}
        </div>
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          <li
            className={currentPage === 1 ? 'page-item disabled' : 'page-item'}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <a className="page-link">{currentPage}</a>
          </li>
          <li
            className={
              currentPage === numberOfPages ? 'page-item disabled' : 'page-item'
            }
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Posts;
