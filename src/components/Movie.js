import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="title" />
      {/* <img> 태그에는 alt 를 같이 써주는 것이 권장됨 */}
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* <a> 태그의 href 대신 리액트는 Link 를 사용. 페이지 전체를 새로고침하면서 이동하지 않고, 더 가볍게 이동*/}
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>{" "}
      {/* 글의 길이가 235가 넘으면 235까지만 표시하기 */}
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
