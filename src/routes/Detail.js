import { useEffect } from "react";
import { useParams } from "react-router-dom"; // url의 값을 불러오기 위한 useParams

function Detail() {
  const { id } = useParams(); // url / 의 가장 마지막 부분 가져오기.

  //async await 공부하기... 어렵다... 왜 이렇게 사용해야 하는지
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  /*
  // 위 코드와 동일! => 함수를 풀어서 작성함.
  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
  }
  */

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
