import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // react-router-dom v6 버전으로 되면서 수업내용과 조금 다름. <Switch> 대신 <Routes> 를 사용
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />{" "}
        {/*id 앞에 꼭 ':' 를 붙여줘야 함. 붙이지 않으면 그냥 string */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
