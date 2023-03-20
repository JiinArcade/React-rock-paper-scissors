import logo from './logo.svg';
import { useState } from 'react';
import Box from './component/Box';
import './App.css'

// 객체는 key : value 형태로 작성한다.
// value로 여러개의 프로퍼티를 가질 수 있다.
// 프로퍼티 : key : value 쌍
const choice = {
  scissors: {
    name: "Scissors",
    img: "https://thumb.photo-ac.com/bc/bc0333d139457050e98ccec4e410085a_t.jpeg"
  },
  rock: {
    name: "Rock",
    img: "http://health.chosun.com/site/data/img_dir/2019/12/10/2019121001214_0.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://src.hidoc.co.kr/image/lib/2020/3/27/1585295218513_0.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)

  const play = (userChoice) => {
    console.log(userChoice, "선택됨!")
    setUserSelect(choice[userChoice])
  }

  const randomChoice = () => {
    
  }
  
  return (
    <div className="App">
      <div class="Box-list">
        <Box title="You" item={userSelect}></Box>
        <Box title="Computer"></Box>
      </div>
      <div className='btn-list'>
        {/* play함수한테 매개변수로 값을 전달한다
            리액트 에서는 play() UI를 그려줄 때 해당 함수를 실행 시킨다.
            onClick시 실행되게 하고 싶다면 콜백함수 형태로 전달해줘야 한다. */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
