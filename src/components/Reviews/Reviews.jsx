import { useEffect, useState } from 'react';
import { fetchReviewsInfo } from '../servise/appServise';
import { useParams } from 'react-router-dom';
// import { BASE_IMG_URL } from 'components/servise/constants';

const Reviews = () => {
  const [results, setResults] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchReviewsInfo(id).then(setResults);
  }, [id]);
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {results.map(author => (
          <li key={author.id}>
            <h3>{author.author}</h3>
            <p>{author.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;