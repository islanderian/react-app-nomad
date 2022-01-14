import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //각 toDo 들을 저장할 array
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // form 의 기본 속성인 onSubmit의 가본속성 없애기(새로고침 안되게)
    //toDo 가 비어있다면 그냥 return
    if (toDo === "") {
      return;
    }
    setToDo(""); //submit 하면 input의 value 다시 초기화
    setToDos((currentArray) => [toDo, ...currentArray]); // 기존 array 에 새로운 toDo 추가! '...[array]' array 배열의 각 elelment를 의미!
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          )) /*map 은 배열의 item 각각에 함수를 실행해서 item 갯수만큼의 return 값을 반환해서 배열로 만든다  */
        }
      </ul>
    </div>
  );
}

export default App;
