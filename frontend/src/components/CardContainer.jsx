import { useState, useEffect } from 'react';
import HomeCard from './HomeCard';

const CardContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error: {error}</div>;

  return (
    <div className="container">
        <h3 className='text-center mb-4'>Blogs</h3>
        <div className="row">
           {posts.map(post => (
             <HomeCard key={post.id} post={post} />
           ))}
        </div>
    </div>
  );
};

export default CardContainer