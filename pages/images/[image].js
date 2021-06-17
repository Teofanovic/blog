import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';

const Image = () => {
  const router = useRouter();
  const imageId = router.query.image;

  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?id=${imageId}`)
      .then((res) => {
        if (res.data[0]) {
          setImage(res.data[0]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header currentRoute="images" />
      {image && (
        <div className="d-flex align-items-center flex-column">
          <img src={image.url} className="img-fluid p-4" alt="/" />
          <div>
            <h4>{image.title}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
