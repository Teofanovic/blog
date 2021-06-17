import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';

const Images = () => {
  const [photos, setPhotos] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=${itemsPerPage}`)
      .then((res) => {
        setPhotos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [itemsPerPage]);

  return (
    <>
      <Header currentRoute="images" />
      <div className="row justify-content-center py-3">
        <div className="col-sm-12 col-md-10 justify-content-center">
          {photos &&
            photos.map((photo) => (
              <Link href={`/images/${photo.id}`}>
                <img
                  src={photo.thumbnailUrl}
                  className="img-thumbnail m-sm-1 m-lg-2"
                  style={{ cursor: 'pointer' }}
                  alt="/"
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setItemsPerPage(itemsPerPage + 10)}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Images;
