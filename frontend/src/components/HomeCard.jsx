import { Link } from "react-router-dom";

const HomeCard = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <a href="#!">
          <img
            className="card-img-top"
            src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">{post.created_at ? new Date(post.created_at).toLocaleDateString() : 'Date'}</div>
          <h2 className="card-title h4">{post.title || 'Post Title'}</h2>
          <p className="card-text">
            {post.content || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.'}
          </p>
          <div className="actionsBtnContainer d-flex justify-content-between">
            <Link className="btn btn-primary" to="/">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
