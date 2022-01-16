import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="title" />
      <h2>
        <Link to="/movie">{title}</Link>{" "}
        {/* <a> 태그의 href 대신 리액트는 Link 를 사용. 페이지 전체를 새로고침하면서 이동하지 않고, 더 가볍게 이동*/}
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
